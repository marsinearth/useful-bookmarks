import {
  commitMutation,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../utils/Environment'
import { DVars } from '../types'

type DPMutArgs = {
  (
    viewerId: string,
    postId: string
  ): void
}

const mutation = graphql`
  mutation DeletePostMutation($input: DeletePostInput!) {
    deletePost(input: $input) {
      deletedId
    }
  }
`

const DeletePostMutation: DPMutArgs = function (postId, viewerId) {
  const variables: DVars = {
    input: {
      id: postId,
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
        const deletePostField = proxyStore.getRootField('deletePost')
        if (deletePostField) {
          const deletedId: any = deletePostField.getValue('deletedId')
          const viewerProxy = proxyStore.get(viewerId)
          if (viewerProxy) {
            const connection = ConnectionHandler.getConnection(viewerProxy, 'ListPage_allPosts')
            if (connection) ConnectionHandler.deleteNode(connection, deletedId)
          }
        }
      },
    },
  )
}

export default DeletePostMutation
