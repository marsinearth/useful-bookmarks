import {
  commitMutation,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../utils/Environment'
import { SHU } from '../types'

type CLMutArgs = {
  (
    userId: string,
    postId: string
  ): void
}

type CLVars = {
  input: {
    userId: string,
    postId: string,
    clientMutationId: string
  }
}

const mutation = graphql`
  mutation CreateLikeMutation($input: CreateLikeInput!) {
    createLike(input: $input) {
      like {
        id
        user {
          id
        }
        post {
          id
        }
      }
    }
  }
`

const sharedUpdater: SHU = function (store, postId, newLike) {
  const postProxy = store.get(postId)
  if (postProxy) {
    const connection = ConnectionHandler.getConnection(postProxy, 'Post_likes')
    if (connection) {
      const newEdge = ConnectionHandler.createEdge(store, connection, newLike, 'LikeEdge')
      const count = connection.getValue('count')
      if (typeof count === 'number') {
        connection.setValue(count + 1, 'count')
        ConnectionHandler.insertEdgeAfter(connection, newEdge)
      }
    }
  }
}

let tempID = 0

const CreateLikeMutation: CLMutArgs = function (userId, postId) {
  const variables: CLVars = {
    input: {
      userId,
      postId,
      clientMutationId: `${tempID += 1}`
    },
  }

  commitMutation(environment,
    {
      mutation,
      variables,
      onError: err => console.error(err),
      optimisticUpdater: proxyStore => {
        // 1 - create the `newPost` as a mock that can be added to the store
        tempID += 1
        const id = `client:newLike:${tempID}`
        const newLike = proxyStore.create(id, 'Like')
        const likedUser = proxyStore.create(
          `client:newLikedUser:${tempID}`,
          'User'
        )
        const likedPost = proxyStore.create(
          `client:newLikedPost:${tempID}`,
          'Post'
        )

        newLike.setValue(id, 'id')
        likedUser.setValue(userId, 'id')
        likedPost.setValue(postId, 'id')
        newLike.setLinkedRecord(likedUser, 'user')
        newLike.setLinkedRecord(likedPost, 'post')

        sharedUpdater(proxyStore, postId, newLike)
      },
      updater: proxyStore => {
        const createLikeField = proxyStore.getRootField('createLike')
        const newLike = createLikeField && createLikeField.getLinkedRecord('like')

        if (newLike) sharedUpdater(proxyStore, postId, newLike)
      },
    },
  )
}

export default CreateLikeMutation
