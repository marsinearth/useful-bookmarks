import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../Environment'

const mutation = graphql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      comment {
        id
        content
        commentedBy {
          id
          name
        }
        commentedPost {
          id
        }
      }
    }
  }
`

function sharedUpdater(store, postId, newComment) {
  const postProxy = store.get(postId),
  connection = ConnectionHandler.getConnection(postProxy, 'Post_comments'),
  newEdge = ConnectionHandler.createEdge(store, connection, newComment, 'CommentEdge')

  if(connection) ConnectionHandler.insertEdgeAfter(connection, newEdge)
}

let tempID = 0

export default function CreateCommentMutation(
  content,
  commentedById,
  commentedByUserName,
  commentedPostId,
  viewerId,
  callback
) {
  const variables = {
    input: {
      content,
      commentedById,
      commentedPostId,
      clientMutationId: ""
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: res => {
        //console.log(res, environment)
        callback()
      },
      onError: err => console.error(err),
      optimisticUpdater: proxyStore => {
        // 1 - create the `newPost` as a mock that can be added to the store
        const id = 'client:newComment:' + tempID++,
        newComment = proxyStore.create(id, 'Comment'),
        commentedUser = proxyStore.create(
          'client:commentedBy' + tempID++,
          'User'
        ),
        commentedPost = proxyStore.create(
          'client:commentedPost' + tempID++,
          'Post'
        )

        newComment.setValue(id, 'id')
        newComment.setValue(content, 'content')
        commentedUser.setValue(commentedById, 'id')
        commentedUser.setValue(commentedByUserName, 'name')
        commentedPost.setValue(commentedPostId, 'id')
        newComment.setLinkedRecord(commentedUser, 'commentedBy')
        newComment.setLinkedRecord(commentedPost, 'commentedPost')

        sharedUpdater(proxyStore, commentedPostId, newComment)
      },
      updater: proxyStore => {
        const createCommentField = proxyStore.getRootField('createComment'),
        newComment = createCommentField.getLinkedRecord('comment')

        sharedUpdater(proxyStore, commentedPostId, newComment)
      },

    },
  )
}
