/**
 * @flow
 * @relayHash 66abded69398ddba1e5296f95ebbe2dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCommentInput = {|
  id: string,
  clientMutationId: string,
|};
export type DeleteCommentMutationVariables = {|
  input: DeleteCommentInput
|};
export type DeleteCommentMutationResponse = {|
  +deleteComment: ?{|
    +deletedId: ?string
  |}
|};
export type DeleteCommentMutation = {|
  variables: DeleteCommentMutationVariables,
  response: DeleteCommentMutationResponse,
|};
*/


/*
mutation DeleteCommentMutation(
  $input: DeleteCommentInput!
) {
  deleteComment(input: $input) {
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteComment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteCommentPayload",
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
    "name": "DeleteCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCommentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCommentMutation",
    "id": null,
    "text": "mutation DeleteCommentMutation(\n  $input: DeleteCommentInput!\n) {\n  deleteComment(input: $input) {\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c445f0a568fbe1dc8729526979f6cc40';
module.exports = node;
