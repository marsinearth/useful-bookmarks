/**
 * @flow
 * @relayHash d6d9bb8410dfc94e82712fc7bd0fadcf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthenticateUserMutationVariables = {|
  input: {
    email: string,
    password: string,
    clientMutationId: string,
  },
|};
export type AuthenticateUserMutationResponse = {|
  +authenticateUser: ?{|
    +id: string,
    +token: string,
  |},
|};
*/


/*
mutation AuthenticateUserMutation(
  $input: AuthenticateUserInput!
) {
  authenticateUser(input: $input) {
    id
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AuthenticateUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "authenticateUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AuthenticateUserInput!"
      }
    ],
    "concreteType": "AuthenticateUserPayload",
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
  "operationKind": "mutation",
  "name": "AuthenticateUserMutation",
  "id": null,
  "text": "mutation AuthenticateUserMutation(\n  $input: AuthenticateUserInput!\n) {\n  authenticateUser(input: $input) {\n    id\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AuthenticateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthenticateUserMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '1263bb4b785441e24bccf824dfd0b6b7';
module.exports = node;
