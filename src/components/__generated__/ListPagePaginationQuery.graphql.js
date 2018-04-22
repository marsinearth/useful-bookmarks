/**
 * @flow
 * @relayHash 2363888c5e68b317eb8a4dd106b50b36
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListPage_viewer$ref = any;
export type ListPagePaginationQueryVariables = {|
  count: number,
  cursor: ?string,
  id: ?string,
|};
export type ListPagePaginationQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: ListPage_viewer$ref,
  |},
|};
*/


/*
query ListPagePaginationQuery(
  $count: Int!
  $cursor: String
  $id: ID
) {
  viewer {
    ...ListPage_viewer
    id
  }
}

fragment ListPage_viewer on Viewer {
  ...Post_viewer
  User(id: $id) {
    name
    id
  }
  allPosts(first: $count, after: $cursor, orderBy: createdAt_DESC) {
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

fragment Post_viewer on Viewer {
  ...Comment_viewer
  id
  User(id: $id) {
    id
    name
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
  comments(first: $count, after: $cursor, orderBy: createdAt_ASC) {
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

fragment Comment_viewer on Viewer {
  id
  User(id: $id) {
    id
  }
  allComments(last: 100, orderBy: createdAt_ASC) {
    edges {
      node {
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID",
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
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
],
v3 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": "createdAt_ASC",
  "type": "CommentOrderBy"
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "cursor",
  "type": "String"
},
v7 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count",
  "type": "Int"
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ListPagePaginationQuery",
  "id": null,
  "text": "query ListPagePaginationQuery(\n  $count: Int!\n  $cursor: String\n  $id: ID\n) {\n  viewer {\n    ...ListPage_viewer\n    id\n  }\n}\n\nfragment ListPage_viewer on Viewer {\n  ...Post_viewer\n  User(id: $id) {\n    name\n    id\n  }\n  allPosts(first: $count, after: $cursor, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Post_post\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment Post_viewer on Viewer {\n  ...Comment_viewer\n  id\n  User(id: $id) {\n    id\n    name\n  }\n}\n\nfragment Post_post on Post {\n  id\n  description\n  imageUrl\n  siteUrl\n  postedBy {\n    id\n    name\n  }\n  comments(first: $count, after: $cursor, orderBy: createdAt_ASC) {\n    edges {\n      node {\n        ...Comment_comment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  content\n  commentedBy {\n    id\n    name\n  }\n  commentedPost {\n    id\n  }\n}\n\nfragment Comment_viewer on Viewer {\n  id\n  User(id: $id) {\n    id\n  }\n  allComments(last: 100, orderBy: createdAt_ASC) {\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ListPagePaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
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
    "name": "ListPagePaginationQuery",
    "argumentDefinitions": v0,
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
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "User",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "id",
                "type": "ID"
              }
            ],
            "concreteType": "User",
            "plural": false,
            "selections": v2
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allComments",
            "storageKey": "allComments(last:100,orderBy:\"createdAt_ASC\")",
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 100,
                "type": "Int"
              },
              v3
            ],
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
                      v1,
                      v4
                    ]
                  },
                  v5
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasPreviousPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "startCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allComments",
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 100,
                "type": "Int"
              },
              v3
            ],
            "handle": "connection",
            "key": "Comment_allComments",
            "filters": []
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allPosts",
            "storageKey": null,
            "args": [
              v6,
              v7,
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "createdAt_DESC",
                "type": "PostOrderBy"
              }
            ],
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
                      v1,
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
                        "selections": v2
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "comments",
                        "storageKey": null,
                        "args": [
                          v6,
                          v7,
                          v3
                        ],
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
                                  v1,
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
                                    "selections": v2
                                  },
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "commentedPost",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Post",
                                    "plural": false,
                                    "selections": [
                                      v1
                                    ]
                                  },
                                  v4
                                ]
                              },
                              v5
                            ]
                          },
                          v8
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "comments",
                        "args": [
                          v6,
                          v7,
                          v3
                        ],
                        "handle": "connection",
                        "key": "Post_comments",
                        "filters": []
                      },
                      v4
                    ]
                  },
                  v5
                ]
              },
              v8
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allPosts",
            "args": [
              v6,
              v7,
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "createdAt_DESC",
                "type": "PostOrderBy"
              }
            ],
            "handle": "connection",
            "key": "ListPage_allPosts",
            "filters": []
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'c43835ddeda6ce5e609cb8ee112999a2';
module.exports = node;
