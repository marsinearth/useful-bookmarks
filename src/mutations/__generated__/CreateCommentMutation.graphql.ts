/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateCommentInput = {
    readonly content: string;
    readonly commentedById?: string | null;
    readonly commentedBy?: CommentcommentedByUser | null;
    readonly commentedPostId?: string | null;
    readonly commentedPost?: CommentcommentedPostPost | null;
    readonly clientMutationId: string;
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
export type PostpostedByUser = {
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
export type PostcommentsComment = {
    readonly content: string;
    readonly commentedById?: string | null;
    readonly commentedBy?: CommentcommentedByUser | null;
};
export type CreateCommentMutationVariables = {
    readonly input: CreateCommentInput;
};
export type CreateCommentMutationResponse = {
    readonly createComment: {
        readonly comment: {
            readonly id: string;
            readonly content: string;
            readonly commentedBy: {
                readonly name: string;
            } | null;
        } | null;
    } | null;
};
export type CreateCommentMutation = {
    readonly response: CreateCommentMutationResponse;
    readonly variables: CreateCommentMutationVariables;
};



/*
mutation CreateCommentMutation(
  $input: CreateCommentInput!
) {
  createComment(input: $input) {
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

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
  "fragment": {
    "kind": "Fragment",
    "name": "CreateCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createComment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCommentPayload",
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "commentedBy",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v4/*: any*/)
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
    "name": "CreateCommentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createComment",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCommentPayload",
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "commentedBy",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCommentMutation",
    "id": null,
    "text": "mutation CreateCommentMutation(\n  $input: CreateCommentInput!\n) {\n  createComment(input: $input) {\n    comment {\n      id\n      content\n      commentedBy {\n        name\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7eab78305f9b5ab686c8fdcbc5bb3caa';
export default node;
