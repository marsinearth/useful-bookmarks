/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type SignUpUserMutationVariables = {
    readonly name: string;
    readonly email: string;
    readonly password: string;
};
export type SignUpUserMutationResponse = {
    readonly signUpUser: {
        readonly key: string;
        readonly token: string;
    } | null;
};
export type SignUpUserMutation = {
    readonly response: SignUpUserMutationResponse;
    readonly variables: SignUpUserMutationVariables;
};



/*
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
*/

const node: ConcreteRequest = (function(){
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
    "name": "signUpUser",
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
    "concreteType": "SignUpUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "key",
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
    "text": "mutation SignUpUserMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  signUpUser(name: $name, email: $email, password: $password) {\n    key\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0bb3ad4ef626713ed5712d1c73ff341e';
export default node;
