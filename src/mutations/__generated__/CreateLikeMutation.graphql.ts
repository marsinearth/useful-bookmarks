/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateLikeInput = {
    readonly postId?: string | null;
    readonly post?: LikepostPost | null;
    readonly userId?: string | null;
    readonly user?: LikeuserUser | null;
    readonly clientMutationId: string;
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
    readonly likesIds?: ReadonlyArray<string> | null;
    readonly likes?: ReadonlyArray<UserlikesLike> | null;
    readonly postsIds?: ReadonlyArray<string> | null;
    readonly posts?: ReadonlyArray<UserpostsPost> | null;
};
export type UserlikesLike = {
    readonly postId?: string | null;
    readonly post?: LikepostPost | null;
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
export type CreateLikeMutationVariables = {
    readonly input: CreateLikeInput;
};
export type CreateLikeMutationResponse = {
    readonly createLike: {
        readonly like: {
            readonly id: string;
            readonly user: {
                readonly id: string;
            };
            readonly post: {
                readonly id: string;
            };
        } | null;
    } | null;
};
export type CreateLikeMutation = {
    readonly response: CreateLikeMutationResponse;
    readonly variables: CreateLikeMutationVariables;
};



/*
mutation CreateLikeMutation(
  $input: CreateLikeInput!
) {
  createLike(input: $input) {
    like {
      id
      user {
        id
      }
      post {
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
    "type": "CreateLikeInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
],
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createLike",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateLikePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "like",
        "storageKey": null,
        "args": null,
        "concreteType": "Like",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v2/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "post",
            "storageKey": null,
            "args": null,
            "concreteType": "Post",
            "plural": false,
            "selections": (v2/*: any*/)
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
    "name": "CreateLikeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateLikeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateLikeMutation",
    "id": null,
    "text": "mutation CreateLikeMutation(\n  $input: CreateLikeInput!\n) {\n  createLike(input: $input) {\n    like {\n      id\n      user {\n        id\n      }\n      post {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '706949f5a5e9e6312687f938589892f3';
export default node;
