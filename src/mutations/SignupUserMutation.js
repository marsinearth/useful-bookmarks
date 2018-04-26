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

export default function SignupUserMutation(name, email, password, successCb, failCb) {
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
          const signup = res.signupUser
          if(signup) {
            const { id, token } = signup
            successCb(id, token)
          } else {
            alert('email is malformed.')
            failCb()
          }
      },
      onError: err => console.error(err),
    },
  )
}
