import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../utils/Environment'

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

function sharedUpdater(store, viewerId, newPost) {
  const viewerProxy = store.get(viewerId),
  connection = ConnectionHandler.getConnection(viewerProxy, "ListPage_allPosts"),
  newEdge = ConnectionHandler.createEdge(store, connection, newPost, 'PostEdge')

  if (connection) ConnectionHandler.insertEdgeAfter(connection, newEdge)
}

let tempID = 0

export default function CreatePostMutation(
  description,
  imageUrl,
  siteUrl,
  postedById,
  viewerId,
  callback
) {
  const variables = {
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
        const id = 'client:newPost:' + tempID++,
        newPost = proxyStore.create(id, 'Post')

        newPost.setValue(id, 'id')
        newPost.setValue(description, 'description')
        newPost.setValue(imageUrl, 'imageUrl')
        newPost.setValue(siteUrl, 'siteUrl')
      // 2 - add `newPost` to the store
        sharedUpdater(proxyStore, viewerId, newPost)
      },
      updater: proxyStore => {
        // 1 - retrieve the `newPost` from the server response
        const createPostField = proxyStore.getRootField('createPost'),
        newPost = createPostField.getLinkedRecord('post')
      // 2 - add `newPost` to the store
        sharedUpdater(proxyStore, viewerId, newPost)
      },

    },
  )
}
