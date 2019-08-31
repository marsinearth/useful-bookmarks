/**
 * @flow
 * @relayHash 1b02f28d79f50ed21ebf39ec6f27c731
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignUpUserMutationVariables = {|
  name: string,
  email: string,
  password: string,
|};
export type SignUpUserMutationResponse = {|
  +signupUser: ?{|
    +id: string,
    +token: string,
  |}
|};
export type SignUpUserMutation = {|
  variables: SignUpUserMutationVariables,
  response: SignUpUserMutationResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "signupUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "SignupUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SignUpUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignUpUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignUpUserMutation",
    "id": null,
    "text": "mutation SignUpUserMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  signupUser(name: $name, email: $email, password: $password) {\n    id\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b4c2501b1db5a7ef35de2d491a1fd68a';
module.exports = node;
