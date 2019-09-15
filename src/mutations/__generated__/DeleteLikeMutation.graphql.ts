/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteLikeInput = {
    readonly id: string;
    readonly clientMutationId: string;
};
export type DeleteLikeMutationVariables = {
    readonly input: DeleteLikeInput;
};
export type DeleteLikeMutationResponse = {
    readonly deleteLike: {
        readonly deletedId: string | null;
    } | null;
};
export type DeleteLikeMutation = {
    readonly response: DeleteLikeMutationResponse;
    readonly variables: DeleteLikeMutationVariables;
};



/*
mutation DeleteLikeMutation(
  $input: DeleteLikeInput!
) {
  deleteLike(input: $input) {
    deletedId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteLikeInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteLike",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteLikePayload",
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
    "name": "DeleteLikeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteLikeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteLikeMutation",
    "id": null,
    "text": "mutation DeleteLikeMutation(\n  $input: DeleteLikeInput!\n) {\n  deleteLike(input: $input) {\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '56a76710392c86c0c382a3b51c4acc61';
export default node;
