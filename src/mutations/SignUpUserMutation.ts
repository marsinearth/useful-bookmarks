import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro'
import environment from '../utils/Environment';
import { AuthMutArgs, AuthVars, compRes } from '../types'

const mutation = graphql`
  mutation SignUpUserMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signupUser(name: $name, email: $email, password: $password) {
      id
      token
    }
  }
`

const SignUpUserMutation: AuthMutArgs = function (
  email,
  password,
  successCb,
  failCb,
  name
) {
  const variables: AuthVars = {
    email,
    password,
    clientMutationId: '',
    name,
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (res: any) => {
      const signUp = res.signupUser as compRes
      if (signUp) {
        const { id, token } = signUp
        successCb(id, token)
      } else {
        alert('email is malformed.')
        failCb();
      }
    },
    onError: err => console.error(err),
  })
}

export default SignUpUserMutation;
