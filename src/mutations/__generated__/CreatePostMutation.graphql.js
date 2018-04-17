/**
 * @flow
 * @relayHash d08b17bb196310e4ed2cd65f96c96b7d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreatePostInputVariables = {|
  description: string,
  imageUrl: string,
  siteUrl: string,
  postedById: ?string,
  postedBy: ?PostpostedByUserVariables,
  commentsIds: ?$ReadOnlyArray<string>,
  comments: ?$ReadOnlyArray<PostcommentsCommentVariables>,
  clientMutationId: string,
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
type PostcommentsCommentVariables = {|
  content: string,
  commentedById: ?string,
  commentedBy: ?CommentcommentedByUserVariables,
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
type UserpostsPostVariables = {|
  description: string,
  imageUrl: string,
  siteUrl: string,
  commentsIds: ?$ReadOnlyArray<string>,
  comments: ?$ReadOnlyArray<PostcommentsCommentVariables>,
|};
export type CreatePostMutationVariables = {|
  input: CreatePostInputVariables,
|};
export type CreatePostMutationResponse = {|
  +createPost: ?{|
    +post: ?{|
      +id: string,
      +description: string,
      +imageUrl: string,
      +siteUrl: string,
    |},
  |},
|};
*/


/*
mutation CreatePostMutation(
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    post {
      id
      description
      imageUrl
      siteUrl
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreatePostInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createPost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreatePostInput!"
      }
    ],
    "concreteType": "CreatePostPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "post",
        "storageKey": null,
        "args": null,
        "concreteType": "Post",
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
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "imageUrl",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "siteUrl",
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
  "name": "CreatePostMutation",
  "id": null,
  "text": "mutation CreatePostMutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    post {\n      id\n      description\n      imageUrl\n      siteUrl\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreatePostMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePostMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '2dd3161842beb80e7c841bb39c56a4ca';
module.exports = node;
