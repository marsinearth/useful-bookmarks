import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro'
import environment from '../utils/Environment';
import RSwal from '../utils/reactSwal';
import { AuthMutArgs, AuthVars, compRes } from '../types'

const mutation = graphql`
  mutation SignUpUserMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signUpUser(name: $name, email: $email, password: $password) {
      key
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
      const signUp = res.signUpUser as compRes
      if (signUp) {
        const { key, token } = signUp
        successCb(key, token)
      } else {
        RSwal('error', 'email form is not valid.')
        failCb();
      }
    },
    onError: err => console.error(err),
  })
}

export default SignUpUserMutation;
