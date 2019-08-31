import {
  commitMutation,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import {
  ConnectionHandler
} from 'relay-runtime'
import environment from '../utils/Environment'
import { SHU } from '../types'

type CCMutArgs = {
  (
    content: string,
    commentedById: string,
    commentedByName: string,
    commentedPostId: string,
    callback: () => void
  ): void
}

type CCVars = {
  input: {
    content: string,
    commentedById: string,
    commentedPostId: string,
    clientMutationId: string
  }
}

const mutation = graphql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      comment {
        id
        content
        commentedBy {
          name
        }
      }
    }
  }
`

const sharedUpdater: SHU = function (store, postId, newComment) {
  const postProxy = store.get(postId)
  if (postProxy) {
    const connection = ConnectionHandler.getConnection(postProxy, 'ListComments_comments')
    if (connection) {
      const newEdge = ConnectionHandler.createEdge(store, connection, newComment, 'CommentEdge')
      ConnectionHandler.insertEdgeAfter(connection, newEdge)
    }
  }
}

let tempID = 0

const CreateCommentMutation: CCMutArgs = function (
  content,
  commentedById,
  commentedByName,
  commentedPostId,
  callback
) {
  const variables: CCVars = {
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
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
      optimisticUpdater: proxyStore => {
        // 1 - create the `newPost` as a mock that can be added to the store
        tempID += 1
        const id = `client:newComment:${tempID}`
        const newComment = proxyStore.create(id, 'Comment')
        const commentedUser = proxyStore.create(
          `client:newCommentUser:${tempID}`,
          'User'
        )
        const commentedPost = proxyStore.create(
          `client:newCommentPost:${tempID}`,
          'Post'
        )

        newComment.setValue(id, 'id')
        newComment.setValue(content, 'content')
        commentedUser.setValue(commentedById, 'id')
        commentedUser.setValue(commentedByName, 'name')
        commentedPost.setValue(commentedPostId, 'id')
        newComment.setLinkedRecord(commentedUser, 'commentedBy')
        newComment.setLinkedRecord(commentedPost, 'commentedPost')

        sharedUpdater(proxyStore, commentedPostId, newComment)
      },
      updater: proxyStore => {
        const createCommentField = proxyStore.getRootField('createComment')
        const newComment = createCommentField && createCommentField.getLinkedRecord('comment')

        if (newComment) sharedUpdater(proxyStore, commentedPostId, newComment)
      },

    },
  )
}

export default CreateCommentMutation
