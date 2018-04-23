/**
 * @flow
 * @relayHash 38ace18b7272b63439424c2ffba36f22
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UpdateCommentInputVariables = {|
  content: ?string,
  id: string,
  commentedById: ?string,
  commentedBy: ?CommentcommentedByUserVariables,
  commentedPostId: ?string,
  commentedPost: ?CommentcommentedPostPostVariables,
  clientMutationId: string,
|};
type CommentcommentedByUserVariables = {|
  email: string,
  name: string,
  password: string,
  commentsIds: ?$ReadOnlyArray<string>,
  comments: ?$ReadOnlyArray<UsercommentsCommentVariables>,
  postsIds: ?$ReadOnlyArray<string>,
  posts: ?$ReadOnlyArray<UserpostsPostVariables>,
|};
type UsercommentsCommentVariables = {|
  content: string,
  commentedPostId: ?string,
  commentedPost: ?CommentcommentedPostPostVariables,
|};
type CommentcommentedPostPostVariables = {|
  description: string,
  imageUrl: string,
  siteUrl: string,
  postedById: ?string,
  postedBy: ?PostpostedByUserVariables,
  commentsIds: ?$ReadOnlyArray<string>,
  comments: ?$ReadOnlyArray<PostcommentsCommentVariables>,
|};
type PostpostedByUserVariables = {|
  email: string,
  name: string,
  password: string,
  commentsIds: ?$ReadOnlyArray<string>,
  comments: ?$ReadOnlyArray<UsercommentsCommentVariables>,
  postsIds: ?$ReadOnlyArray<string>,
  posts: ?$ReadOnlyArray<UserpostsPostVariables>,
|};
type UserpostsPostVariables = {|
  description: string,
  imageUrl: string,
  siteUrl: string,
  commentsIds: ?$ReadOnlyArray<string>,
  comments: ?$ReadOnlyArray<PostcommentsCommentVariables>,
|};
type PostcommentsCommentVariables = {|
  content: string,
  commentedById: ?string,
  commentedBy: ?CommentcommentedByUserVariables,
|};
export type UpdateCommentMutationVariables = {|
  input: UpdateCommentInputVariables,
|};
export type UpdateCommentMutationResponse = {|
  +updateComment: ?{|
    +comment: ?{|
      +id: string,
      +content: string,
      +commentedBy: ?{|
        +name: string,
      |},
    |},
  |},
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
(node/*: any*/).hash = 'f9d4a8436d6e61486afc8ff949d75be7';
module.exports = node;
