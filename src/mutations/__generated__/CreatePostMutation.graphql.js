/**
 * @flow
 * @relayHash d3a2e1133280723619c9ae719fa94ee3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePostInput = {
  description: string,
  imageUrl: string,
  siteUrl: string,
  postedById?: ?string,
  postedBy?: ?PostpostedByUser,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<PostcommentsComment>,
  clientMutationId: string,
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
export type PostcommentsComment = {
  content: string,
  commentedById?: ?string,
  commentedBy?: ?CommentcommentedByUser,
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
export type UserpostsPost = {
  description: string,
  imageUrl: string,
  siteUrl: string,
  commentsIds?: ?$ReadOnlyArray<string>,
  comments?: ?$ReadOnlyArray<PostcommentsComment>,
};
export type CreatePostMutationVariables = {|
  input: CreatePostInput
|};
export type CreatePostMutationResponse = {|
  +createPost: ?{|
    +post: ?{|
      +id: string,
      +description: string,
      +imageUrl: string,
      +siteUrl: string,
    |}
  |}
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
// prettier-ignore
(node/*: any*/).hash = '2dd3161842beb80e7c841bb39c56a4ca';
module.exports = node;
