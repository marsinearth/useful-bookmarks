/**
 * @flow
 * @relayHash 5816a5905097415390ab91cbaf60c358
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
    "kind": "LinkedField",
    "alias": null,
    "name": "updateComment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateCommentInput!"
      }
    ],
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
            "name": "content",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateCommentMutation",
  "id": null,
  "text": "mutation UpdateCommentMutation(\n  $input: UpdateCommentInput!\n) {\n  updateComment(input: $input) {\n    comment {\n      id\n      content\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateCommentMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'fd93ff817b12ad00bd30729054ea17ce';
module.exports = node;
