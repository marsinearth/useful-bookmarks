import {
  commitMutation,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../utils/Environment'
import { IComment } from '../types'

type UCMutArgs = {
  (
    content: string,
    comment: IComment,
    callback: () => void
  ): void
}

type UCVars = {
  input: {
    id: string,
    content: string,
    commentedById: string,
    clientMutationId: string
  }
}

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

function getOptimisticResponse(comment: IComment) {
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

const UpdateCommentMutation: UCMutArgs =  function (
  content,
  comment,
  callback
) {
  const { id, commentedBy } = comment
  const variables: UCVars = {
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

export default UpdateCommentMutation
