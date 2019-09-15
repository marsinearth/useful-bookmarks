/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateCommentInput = {
    readonly content?: string | null;
    readonly id: string;
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
    readonly likesIds?: ReadonlyArray<string> | null;
    readonly likes?: ReadonlyArray<UserlikesLike> | null;
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
    readonly likesIds?: ReadonlyArray<string> | null;
    readonly likes?: ReadonlyArray<PostlikesLike> | null;
};
export type PostpostedByUser = {
    readonly email: string;
    readonly name: string;
    readonly password: string;
    readonly commentsIds?: ReadonlyArray<string> | null;
    readonly comments?: ReadonlyArray<UsercommentsComment> | null;
    readonly likesIds?: ReadonlyArray<string> | null;
    readonly likes?: ReadonlyArray<UserlikesLike> | null;
    readonly postsIds?: ReadonlyArray<string> | null;
    readonly posts?: ReadonlyArray<UserpostsPost> | null;
};
export type UserlikesLike = {
    readonly postId?: string | null;
    readonly post?: LikepostPost | null;
};
export type LikepostPost = {
    readonly description: string;
    readonly imageUrl: string;
    readonly siteUrl: string;
    readonly postedById?: string | null;
    readonly postedBy?: PostpostedByUser | null;
    readonly commentsIds?: ReadonlyArray<string> | null;
    readonly comments?: ReadonlyArray<PostcommentsComment> | null;
    readonly likesIds?: ReadonlyArray<string> | null;
    readonly likes?: ReadonlyArray<PostlikesLike> | null;
};
export type PostcommentsComment = {
    readonly content: string;
    readonly commentedById?: string | null;
    readonly commentedBy?: CommentcommentedByUser | null;
};
export type PostlikesLike = {
    readonly userId?: string | null;
    readonly user?: LikeuserUser | null;
};
export type LikeuserUser = {
    readonly email: string;
    readonly name: string;
    readonly password: string;
    readonly commentsIds?: ReadonlyArray<string> | null;
    readonly comments?: ReadonlyArray<UsercommentsComment> | null;
    readonly likesIds?: ReadonlyArray<string> | null;
    readonly likes?: ReadonlyArray<UserlikesLike> | null;
    readonly postsIds?: ReadonlyArray<string> | null;
    readonly posts?: ReadonlyArray<UserpostsPost> | null;
};
export type UserpostsPost = {
    readonly description: string;
    readonly imageUrl: string;
    readonly siteUrl: string;
    readonly commentsIds?: ReadonlyArray<string> | null;
    readonly comments?: ReadonlyArray<PostcommentsComment> | null;
    readonly likesIds?: ReadonlyArray<string> | null;
    readonly likes?: ReadonlyArray<PostlikesLike> | null;
};
export type UpdateCommentMutationVariables = {
    readonly input: UpdateCommentInput;
};
export type UpdateCommentMutationResponse = {
    readonly updateComment: {
        readonly comment: {
            readonly id: string;
            readonly content: string;
            readonly commentedBy: {
                readonly name: string;
            } | null;
        } | null;
    } | null;
};
export type UpdateCommentMutation = {
    readonly response: UpdateCommentMutationResponse;
    readonly variables: UpdateCommentMutationVariables;
};



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

const node: ConcreteRequest = (function(){
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
    "name": "UpdateCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateComment",
        "storageKey": null,
        "args": (v1/*: any*/),
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
    "name": "UpdateCommentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateComment",
        "storageKey": null,
        "args": (v1/*: any*/),
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
    "name": "UpdateCommentMutation",
    "id": null,
    "text": "mutation UpdateCommentMutation(\n  $input: UpdateCommentInput!\n) {\n  updateComment(input: $input) {\n    comment {\n      id\n      content\n      commentedBy {\n        name\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f9d4a8436d6e61486afc8ff949d75be7';
export default node;
