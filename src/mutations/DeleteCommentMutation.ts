import {
  commitMutation,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../utils/Environment'
import { DVars } from '../types'

type DCMutArgs = {
  (
    commentId: string,
    postId: string
  ): void
}

const mutation = graphql`
  mutation DeleteCommentMutation($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
      deletedId
    }
  }
`

const DeleteCommentMutation: DCMutArgs = function (commentId, postId) {
  const variables: DVars = {
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
        const deletePostField = proxyStore.getRootField('deleteComment')
        const deletedId = deletePostField && deletePostField.getValue('deletedId')
        const postProxy = proxyStore.get(postId)
        const connection = ConnectionHandler.getConnection(postProxy, 'ListComments_comments')

        if (connection) ConnectionHandler.deleteNode(connection, deletedId)
      },
    },
  )
}

export default DeleteCommentMutation
