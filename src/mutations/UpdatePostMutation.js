import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation UpdatePostMutation($input: UpdatePostInput!) {
    updatePost(input: $input) {
      post {
        id
        description
        imageUrl
        siteUrl
      }
    }
  }
`

function getOptimisticResponse(post) {
  const { id, description, imageUrl, siteUrl } = post
  return {
    updatePost: {
      post: {
        id,
        description,
        imageUrl,
        siteUrl
      }
    }
  }
}

export default function UpdatePostMutation(
  description,
  imageUrl,
  siteUrl,
  post,
  viewerId,
  callback
) {
  const variables = {
    input: {
      id: post.id,
      description,
      imageUrl,
      siteUrl,
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
      optimisticResponse: getOptimisticResponse(post)
    },
  )
}
