import {
  commitMutation,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import {
  ConnectionHandler,
} from 'relay-runtime'
import environment from '../utils/Environment'
import { SHU } from '../types'

type CPMutArgs = {
  (
    description: string,
    imageUrl: string,
    siteUrl: string,
    postedById: string,
    viewerId: string,
    callback: () => void
  ): void
}

type CPVars = {
  input: {
    description: string,
    imageUrl: string,
    siteUrl: string,
    postedById: string,
    clientMutationId: string
  }
}

const mutation = graphql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      post {
        id
        description
        imageUrl
        siteUrl
      }
    }
  }
`

const sharedUpdater: SHU = function (store, viewerId, newPost) {
  const viewerProxy = store.get(viewerId)
  if (viewerProxy) {
    const connection = ConnectionHandler.getConnection(viewerProxy, "ListPage_allPosts")
    if (connection) {
      const newEdge = ConnectionHandler.createEdge(store, connection, newPost, 'PostEdge')
      ConnectionHandler.insertEdgeAfter(connection, newEdge)
    }
  }
}

let tempID = 0

const CreatePostMutation: CPMutArgs = function (
  description,
  imageUrl,
  siteUrl,
  postedById,
  viewerId,
  callback
) {
  const variables: CPVars = {
    input: {
      description,
      imageUrl,
      siteUrl,
      postedById,
      clientMutationId: ""
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: res => {
        console.log('res: ', res)
        callback()
      },
      onError: err => console.error(err),
      optimisticUpdater: proxyStore => {
        // 1 - create the `newPost` as a mock that can be added to the store
        tempID += 1
        const id = `client:newPost:${tempID}`
        const newPost = proxyStore.create(id, 'Post')

        newPost.setValue(id, 'id')
        newPost.setValue(description, 'description')
        newPost.setValue(imageUrl, 'imageUrl')
        newPost.setValue(siteUrl, 'siteUrl')
      // 2 - add `newPost` to the store
        sharedUpdater(proxyStore, viewerId, newPost)
      },
      updater: proxyStore => {
        // 1 - retrieve the `newPost` from the server response
        const createPostField = proxyStore.getRootField('createPost')
        const newPost = createPostField && createPostField.getLinkedRecord('post')
      // 2 - add `newPost` to the store
        if (newPost) sharedUpdater(proxyStore, viewerId, newPost)
      },
    },
  )
}

export default CreatePostMutation
