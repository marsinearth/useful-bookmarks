import {
    commitMutation,
    graphql
} from 'react-relay';
import environment from '../utils/Environment';

const mutation = graphql`
    mutation AuthenticateUserMutation(
      $email: String!,
      $password: String!,
    ) {
        authenticateUser(
          email: $email,
          password: $password
        ) {
          id
          token
        }
    }
`

export default function AuthenticateUserMutation(email, password, successCb, failCb) {
    const variables = {
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
              const auth = res.authenticateUser
              if(auth) {
                const { id, token } = auth
                successCb(id, token)
              }
              else {
                alert('email and password doesn\'t match.')
                failCb()
              }
            },
            onError: err => {
              console.error(err)
            }
        },
    )
}
