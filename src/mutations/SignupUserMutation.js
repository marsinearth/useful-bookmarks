import {
    commitMutation,
    graphql
} from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
    mutation SignupUserMutation(
      $input: SignupUserInput!
    ) {
        signupUser(input: $input) {
          id
          token
        }
    }
`

export default function SignupUserMutation(name, email, password, callback) {
  const variables = {
    input: {
      name,
      email,
      password,
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
          const { id, token } = res.signupUser
          callback(id, token)
      },
      onError: err => console.error(err),
    },
  )
}
