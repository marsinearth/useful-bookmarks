/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type ListPage_viewer$ref = any;
export type HomeAllPostQueryVariables = {
    readonly count: number;
    readonly id?: string | null;
    readonly pCursor?: string | null;
    readonly cCursor?: string | null;
    readonly maxLikes: number;
};
export type HomeAllPostQueryResponse = {
    readonly viewer: {
        readonly User: {
            readonly id: string;
            readonly name: string;
        } | null;
        readonly " $fragmentRefs": ListPage_viewer$ref;
    };
};
export type HomeAllPostQuery = {
    readonly response: HomeAllPostQueryResponse;
    readonly variables: HomeAllPostQueryVariables;
};



/*
query HomeAllPostQuery(
  $count: Int!
  $id: ID
  $pCursor: String
  $cCursor: String
  $maxLikes: Int!
) {
  viewer {
    User(id: $id) {
      id
      name
    }
    ...ListPage_viewer
    id
  }
}

fragment ListPage_viewer on Viewer {
  id
  allPosts(first: $count, after: $pCursor, orderBy: createdAt_DESC) {
    edges {
      node {
        ...Post_post
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment Post_post on Post {
  id
  description
  imageUrl
  siteUrl
  postedBy {
    id
    name
  }
  likes(first: $maxLikes) {
    edges {
      node {
        id
        user {
          id
        }
        __typename
      }
      cursor
    }
    count
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  ...ListComments_post
}

fragment ListComments_post on Post {
  id
  comments(first: $count, after: $cCursor) {
    edges {
      node {
        ...Comment_comment
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
    count
  }
}

fragment Comment_comment on Comment {
  id
  content
  commentedBy {
    id
    name
  }
  commentedPost {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "pCursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cCursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "maxLikes",
    "type": "Int!",
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
  (v1/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
],
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "User",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "id"
    }
  ],
  "concreteType": "User",
  "plural": false,
  "selections": (v2/*: any*/)
},
v4 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count"
},
v5 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "pCursor"
  },
  (v4/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "createdAt_DESC"
  }
],
v6 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "maxLikes"
  }
],
v7 = [
  (v1/*: any*/)
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
},
v13 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cCursor"
  },
  (v4/*: any*/)
],
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    (v12/*: any*/),
    (v11/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeAllPostQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "ListPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeAllPostQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allPosts",
            "storageKey": null,
            "args": (v5/*: any*/),
            "concreteType": "PostConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "PostEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Post",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
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
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "postedBy",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": (v2/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "likes",
                        "storageKey": null,
                        "args": (v6/*: any*/),
                        "concreteType": "LikeConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "LikeEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
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
                                    "selections": (v7/*: any*/)
                                  },
                                  (v8/*: any*/)
                                ]
                              },
                              (v9/*: any*/)
                            ]
                          },
                          (v10/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "pageInfo",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "PageInfo",
                            "plural": false,
                            "selections": [
                              (v11/*: any*/),
                              (v12/*: any*/)
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "likes",
                        "args": (v6/*: any*/),
                        "handle": "connection",
                        "key": "Post_likes",
                        "filters": []
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "comments",
                        "storageKey": null,
                        "args": (v13/*: any*/),
                        "concreteType": "CommentConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "CommentEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Comment",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/),
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "content",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "commentedBy",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "plural": false,
                                    "selections": (v2/*: any*/)
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "commentedPost",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Post",
                                    "plural": false,
                                    "selections": (v7/*: any*/)
                                  },
                                  (v8/*: any*/)
                                ]
                              },
                              (v9/*: any*/)
                            ]
                          },
                          (v14/*: any*/),
                          (v10/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "comments",
                        "args": (v13/*: any*/),
                        "handle": "connection",
                        "key": "ListComments_comments",
                        "filters": []
                      },
                      (v8/*: any*/)
                    ]
                  },
                  (v9/*: any*/)
                ]
              },
              (v14/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allPosts",
            "args": (v5/*: any*/),
            "handle": "connection",
            "key": "ListPage_allPosts",
            "filters": []
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeAllPostQuery",
    "id": null,
    "text": "query HomeAllPostQuery(\n  $count: Int!\n  $id: ID\n  $pCursor: String\n  $cCursor: String\n  $maxLikes: Int!\n) {\n  viewer {\n    User(id: $id) {\n      id\n      name\n    }\n    ...ListPage_viewer\n    id\n  }\n}\n\nfragment ListPage_viewer on Viewer {\n  id\n  allPosts(first: $count, after: $pCursor, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Post_post\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment Post_post on Post {\n  id\n  description\n  imageUrl\n  siteUrl\n  postedBy {\n    id\n    name\n  }\n  likes(first: $maxLikes) {\n    edges {\n      node {\n        id\n        user {\n          id\n        }\n        __typename\n      }\n      cursor\n    }\n    count\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...ListComments_post\n}\n\nfragment ListComments_post on Post {\n  id\n  comments(first: $count, after: $cCursor) {\n    edges {\n      node {\n        ...Comment_comment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    count\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  content\n  commentedBy {\n    id\n    name\n  }\n  commentedPost {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c7aec97db6b56aa7aa0497324a9f504e';
export default node;
