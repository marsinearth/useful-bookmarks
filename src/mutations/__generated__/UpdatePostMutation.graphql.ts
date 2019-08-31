/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdatePostInput = {
    readonly description?: string | null;
    readonly id: string;
    readonly imageUrl?: string | null;
    readonly siteUrl?: string | null;
    readonly postedById?: string | null;
    readonly postedBy?: PostpostedByUser | null;
    readonly commentsIds?: ReadonlyArray<string> | null;
    readonly comments?: ReadonlyArray<PostcommentsComment> | null;
    readonly clientMutationId: string;
};
export type PostpostedByUser = {
    readonly email: string;
    readonly name: string;
    readonly password: string;
    readonly commentsIds?: ReadonlyArray<string> | null;
    readonly comments?: ReadonlyArray<UsercommentsComment> | null;
    readonly postsIds?: ReadonlyArray<string> | null;
    readonly posts?: ReadonlyArray<UserpostsPost> | null;
};
export type UsercommentsComment = {
    readonly content: string;
    readonly commentedPostId?: string | null;
    readonly commentedPost?: CommentcommentedPostPost | null;
};
export type CommentcommentedPostPost = {
    readonly description: string;
    readonly imageUrl: string;
    readonly siteUrl: string;
    readonly postedById?: string | null;
    readonly postedBy?: PostpostedByUser | null;
    readonly commentsIds?: ReadonlyArray<string> | null;
    readonly comments?: ReadonlyArray<PostcommentsComment> | null;
};
export type PostcommentsComment = {
    readonly content: string;
    readonly commentedById?: string | null;
    readonly commentedBy?: CommentcommentedByUser | null;
};
export type CommentcommentedByUser = {
    readonly email: string;
    readonly name: string;
    readonly password: string;
    readonly commentsIds?: ReadonlyArray<string> | null;
    readonly comments?: ReadonlyArray<UsercommentsComment> | null;
    readonly postsIds?: ReadonlyArray<string> | null;
    readonly posts?: ReadonlyArray<UserpostsPost> | null;
};
export type UserpostsPost = {
    readonly description: string;
    readonly imageUrl: string;
    readonly siteUrl: string;
    readonly commentsIds?: ReadonlyArray<string> | null;
    readonly comments?: ReadonlyArray<PostcommentsComment> | null;
};
export type UpdatePostMutationVariables = {
    readonly input: UpdatePostInput;
};
export type UpdatePostMutationResponse = {
    readonly updatePost: {
        readonly post: {
            readonly id: string;
            readonly description: string;
            readonly imageUrl: string;
            readonly siteUrl: string;
        } | null;
    } | null;
};
export type UpdatePostMutation = {
    readonly response: UpdatePostMutationResponse;
    readonly variables: UpdatePostMutationVariables;
};



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

const node: ConcreteRequest = (function(){
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
        "variableName": "input"
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
  "fragment": {
    "kind": "Fragment",
    "name": "UpdatePostMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdatePostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdatePostMutation",
    "id": null,
    "text": "mutation UpdatePostMutation(\n  $input: UpdatePostInput!\n) {\n  updatePost(input: $input) {\n    post {\n      id\n      description\n      imageUrl\n      siteUrl\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2f38220ade18903f99305d5cf681e540';
export default node;
