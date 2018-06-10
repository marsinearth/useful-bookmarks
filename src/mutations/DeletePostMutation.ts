import {
  commitMutation,
  graphql,
} from 'react-relay'
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
        const deletedId = deletePostField && deletePostField.getValue('deletedId')
        const viewerProxy = proxyStore.get(viewerId)
        const connection = ConnectionHandler.getConnection(viewerProxy, 'ListPage_allPosts')
        if (connection) ConnectionHandler.deleteNode(connection, deletedId)
      },
    },
  )
}

export default DeletePostMutation
