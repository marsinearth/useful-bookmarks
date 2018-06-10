import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../utils/Environment'
import { IPost } from '../types'

type UPMutArgs = {
  (
    description: string,
    imageUrl: string,
    siteUrl: string,
    post: IPost,
    viewerId: string,
    callback: () => void
  ): void
}

type UPVars = {
  input: {
    id: string,
    description: string,
    imageUrl: string,
    siteUrl: string,
    clientMutationId: string
  }
}

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

function getOptimisticResponse(post: IPost) {
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

const UpdatePostMutation: UPMutArgs = function (
  description,
  imageUrl,
  siteUrl,
  post,
  viewerId,
  callback
) {
  const variables: UPVars = {
    input: {
      description,
      imageUrl,
      siteUrl,
      id: post.id,
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

export default UpdatePostMutation
