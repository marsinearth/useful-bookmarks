/**
 * @flow
 * @relayHash 5182826199fbfafa12f4c46bdd2c60b6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCommentInput = {
  id: string,
  clientMutationId: string,
};
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
        "variableName": "input",
        "type": "DeleteCommentInput!"
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
  "operationKind": "mutation",
  "name": "DeleteCommentMutation",
  "id": null,
  "text": "mutation DeleteCommentMutation(\n  $input: DeleteCommentInput!\n) {\n  deleteComment(input: $input) {\n    deletedId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCommentMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c445f0a568fbe1dc8729526979f6cc40';
module.exports = node;
