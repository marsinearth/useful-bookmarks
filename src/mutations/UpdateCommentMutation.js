import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation UpdateCommentMutation($input: UpdateCommentInput!) {
    updateComment(input: $input) {
      comment {
        id
        content
      }
    }
  }
`

function getOptimisticResponse(content, comment) {
  return {
    updateComment: {
      comment: {
        id: comment.id,
        content
      }
    }
  }
}

export default function UpdateCommentMutation(
  content,
  comment,
  viewerId,
  callback
) {
  const { id, commentedBy, commentedPost } = comment,
  variables = {
    input: {
      content,
      id,
      commentedById: commentedBy.id,
      commentedPostId: commentedPost.id,
      clientMutationId: ""
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: res => {
        console.log(res, environment)
        callback()
      },
      onError: err => console.error(err),
      optimisticResponse: getOptimisticResponse(content, comment)
    }
  )
}
