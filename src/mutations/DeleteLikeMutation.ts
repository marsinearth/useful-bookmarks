import {
  commitMutation,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../utils/Environment'
import { DVars } from '../types'

type DLMutArgs = {
  (
    likeId: string,
    postId: string,
    callback: () => void
  ): void
}

const mutation = graphql`
  mutation DeleteLikeMutation($input: DeleteLikeInput!) {
    deleteLike(input: $input) {
      deletedId
    }
  }
`

const DeleteLikeMutation: DLMutArgs = function (likeId, postId, callback) {
  const variables: DVars = {
    input: {
      id: likeId,
      clientMutationId: ""
    },
  }
  commitMutation(environment,
    {
      mutation,
      variables,
      onError: err => console.error(err),
      onCompleted: () => {
        callback()
      },
      updater: proxyStore => {
        const deleteLikeField = proxyStore.getRootField('deleteLike')
        if (deleteLikeField) {
          const deletedId: any = deleteLikeField.getValue('deletedId')
          const postProxy = proxyStore.get(postId)
          if (postProxy) {
            const connection = ConnectionHandler.getConnection(postProxy, 'Post_likes')
            if (connection && deletedId) {
              const count = connection.getValue('count')
              if (typeof count === 'number' && count > 0) {
                connection.setValue(count - 1, 'count')
              }
              ConnectionHandler.deleteNode(connection, deletedId)
            }
          }
        }
      },
    },
  )
}

export default DeleteLikeMutation
