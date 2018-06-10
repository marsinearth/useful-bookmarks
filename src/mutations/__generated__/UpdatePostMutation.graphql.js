/**
 * @flow
 * @relayHash cede12423f7ae374a7b2ffc3ba1b5a8d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdatePostInput = {
  description?: ?string,
  id: string,
  imageUrl?: ?string,
  siteUrl?: ?string,
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
export type UpdatePostMutationVariables = {|
  input: UpdatePostInput
|};
export type UpdatePostMutationResponse = {|
  +updatePost: ?{|
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
mutation UpdatePostMutation(
  $input: UpdatePostInput!
) {
  updatePost(input: $input) {
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
    "type": "UpdatePostInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updatePost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdatePostInput!"
      }
    ],
    "concreteType": "UpdatePostPayload",
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
  "name": "UpdatePostMutation",
  "id": null,
  "text": "mutation UpdatePostMutation(\n  $input: UpdatePostInput!\n) {\n  updatePost(input: $input) {\n    post {\n      id\n      description\n      imageUrl\n      siteUrl\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdatePostMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdatePostMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2f38220ade18903f99305d5cf681e540';
module.exports = node;
