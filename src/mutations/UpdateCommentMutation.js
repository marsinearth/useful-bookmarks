import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../utils/Environment'

const mutation = graphql`
  mutation UpdateCommentMutation($input: UpdateCommentInput!) {
    updateComment(input: $input) {
      comment {
        id
        content
        commentedBy {
          name
        }
      }
    }
  }
`

function getOptimisticResponse(comment) {
  const { id, content, commentedBy } = comment
  return {
    updateComment: {
      comment: {
        id,
        content,
        commentedBy
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
  const { id, commentedBy } = comment,
  variables = {
    input: {
      id,
      content,
      commentedById: commentedBy.id,
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
      optimisticResponse: getOptimisticResponse(comment)
    }
  )
}
