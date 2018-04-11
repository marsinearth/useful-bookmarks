import {
    commitMutation,
    graphql
} from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
    mutation AuthenticateUserMutation($input: AuthenticateUserInput!) {
        authenticateUser(input: $input) {
          id
          token
        }
    }
`

export default function AuthenticateUserMutation(email, password, callback) {
    const variables = {
        input: {
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
                const { id, token } = res.authenticateUser
                callback(id, token)
            },
            onError: err => console.error(err),
        },
    )
}
