import { commitMutation, graphql } from 'react-relay'
import environment from '../utils/Environment'
import { AuthMutArgs, AuthVars, compRes } from '../types'

const mutation = graphql`
  mutation AuthenticateUserMutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`

const AuthenticateUserMutation: AuthMutArgs = function (
  email,
  password,
  successCb,
  failCb
) {
  const variables: AuthVars = {
    email,
    password,
    clientMutationId: '',
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (res: { authenticateUser: compRes }) => {
      const auth = res.authenticateUser
      if (auth) {
        const { id, token } = auth
        successCb(id, token);
      } else {
        alert("email and password doesn't match.")
        failCb();
      }
    },
    onError: err => {
      console.error(err)
    },
  })
}
export default AuthenticateUserMutation