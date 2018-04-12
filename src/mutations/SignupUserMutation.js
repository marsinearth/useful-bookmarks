import {
    commitMutation,
    graphql
} from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
    mutation SignupUserMutation(
      $name: String!,
      $email: String!,
      $password: String!
    ) {
        signupUser(
          name: $name,
          email: $email,
          password: $password
        ) {
          id
          token
        }
    }
`

export default function SignupUserMutation(name, email, password, callback) {
  const variables = {
    name,
    email,
    password,
    clientMutationId: ""
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
