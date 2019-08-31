/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type DeletePostInput = {
    readonly id: string;
    readonly clientMutationId: string;
};
export type DeletePostMutationVariables = {
    readonly input: DeletePostInput;
};
export type DeletePostMutationResponse = {
    readonly deletePost: {
        readonly deletedId: string | null;
    } | null;
};
export type DeletePostMutation = {
    readonly response: DeletePostMutationResponse;
    readonly variables: DeletePostMutationVariables;
};



/*
mutation DeletePostMutation(
  $input: DeletePostInput!
) {
  deletePost(input: $input) {
    deletedId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeletePostInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deletePost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeletePostPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
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
    "name": "DeletePostMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeletePostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeletePostMutation",
    "id": null,
    "text": "mutation DeletePostMutation(\n  $input: DeletePostInput!\n) {\n  deletePost(input: $input) {\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '19df18787c76c5a44dee131a2acd30b9';
export default node;
