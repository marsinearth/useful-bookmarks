import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../Environment'

const mutation = graphql`
  mutation DeleteCommentMutation($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
      deletedId
    }
  }
`

export default function DeleteCommentMutation(commentId, postId) {
  const variables = {
    input: {
      id: commentId,
      clientMutationId: ""
    },
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onError: err => console.error(err),
      updater: proxyStore => {
        const deletePostField = proxyStore.getRootField('deleteComment'),
        deletedId = deletePostField.getValue('deletedId'),
        postProxy = proxyStore.get(postId),
        connection = ConnectionHandler.getConnection(postProxy, 'Post_comments')
        
        if (connection) ConnectionHandler.deleteNode(connection, deletedId)
      },
    },
  )
}
