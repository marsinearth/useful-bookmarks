/**
 * @flow
 * @relayHash 9fdd84af5a937cf080ec8a09492a5af7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateCommentInput = {
  content?: ?string,
  id: string,
  commentedById?: ?string,
  commentedBy?: ?CommentcommentedByUser,
  commentedPostId?: ?string,
  commentedPost?: ?CommentcommentedPostPost,
  clientMutationId: string,
};
export type CommentcommentedByUser = {
  email: string,
  name: string,
  password: string,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<UsercommentsComment>,
  postsIds?: ?$ReadOnlyArray<string>,
  posts?: ?$ReadOnlyArray<UserpostsPost>,
};
export type UsercommentsComment = {
  content: string,
  commentedPostId?: ?string,
  commentedPost?: ?CommentcommentedPostPost,
};
export type CommentcommentedPostPost = {
  description: string,
  imageUrl: string,
  siteUrl: string,
  postedById?: ?string,
  postedBy?: ?PostpostedByUser,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<PostcommentsComment>,
};
export type PostpostedByUser = {
  email: string,
  name: string,
  password: string,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<UsercommentsComment>,
  postsIds?: ?$ReadOnlyArray<string>,
  posts?: ?$ReadOnlyArray<UserpostsPost>,
};
export type UserpostsPost = {
  description: string,
  imageUrl: string,
  siteUrl: string,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<PostcommentsComment>,
};
export type PostcommentsComment = {
  content: string,
  commentedById?: ?string,
  commentedBy?: ?CommentcommentedByUser,
};
export type UpdateCommentMutationVariables = {|
  input: UpdateCommentInput
|};
export type UpdateCommentMutationResponse = {|
  +updateComment: ?{|
    +comment: ?{|
      +id: string,
      +content: string,
      +commentedBy: ?{|
        +name: string
      |},
    |}
  |}
|};
*/


/*
mutation UpdateCommentMutation(
  $input: UpdateCommentInput!
) {
  updateComment(input: $input) {
    comment {
      id
      content
      commentedBy {
        name
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "UpdateCommentInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateCommentMutation",
  "id": null,
  "text": "mutation UpdateCommentMutation(\n  $input: UpdateCommentInput!\n) {\n  updateComment(input: $input) {\n    comment {\n      id\n      content\n      commentedBy {\n        name\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateComment",
        "storageKey": null,
        "args": v1,
        "concreteType": "UpdateCommentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comment",
            "storageKey": null,
            "args": null,
            "concreteType": "Comment",
            "plural": false,
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "commentedBy",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v4
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateCommentMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateComment",
        "storageKey": null,
        "args": v1,
        "concreteType": "UpdateCommentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comment",
            "storageKey": null,
            "args": null,
            "concreteType": "Comment",
            "plural": false,
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "commentedBy",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v4,
                  v2
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f9d4a8436d6e61486afc8ff949d75be7';
module.exports = node;
