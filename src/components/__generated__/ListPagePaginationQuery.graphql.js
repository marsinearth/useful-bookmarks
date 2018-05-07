/**
 * @flow
 * @relayHash 9f5c8de655996f63299581e1994d867f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListPage_viewer$ref = any;
export type ListPagePaginationQueryVariables = {|
  count: number,
  pCursor: ?string,
  cCursor: ?string,
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
  $pCursor: String
  $cCursor: String
) {
  viewer {
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
    "name": "pCursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cCursor",
    "type": "String",
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
v2 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count",
  "type": "Int"
},
v3 = [
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
],
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
  "text": "query ListPagePaginationQuery(\n  $count: Int!\n  $pCursor: String\n  $cCursor: String\n) {\n  viewer {\n    ...ListPage_viewer\n    id\n  }\n}\n\nfragment ListPage_viewer on Viewer {\n  id\n  allPosts(first: $count, after: $pCursor, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Post_post\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment Post_post on Post {\n  id\n  description\n  imageUrl\n  siteUrl\n  postedBy {\n    id\n    name\n  }\n  ...ListComments_post\n}\n\nfragment ListComments_post on Post {\n  id\n  comments(first: $count, after: $cCursor) {\n    edges {\n      node {\n        ...Comment_comment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    count\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  content\n  commentedBy {\n    id\n    name\n  }\n  commentedPost {\n    id\n  }\n}\n",
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
            "name": "allPosts",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "pCursor",
                "type": "String"
              },
              v2,
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
                        "selections": v3
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "comments",
                        "storageKey": null,
                        "args": [
                          {
                            "kind": "Variable",
                            "name": "after",
                            "variableName": "cCursor",
                            "type": "String"
                          },
                          v2
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
                                    "selections": v3
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
                          v6,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "count",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "comments",
                        "args": [
                          {
                            "kind": "Variable",
                            "name": "after",
                            "variableName": "cCursor",
                            "type": "String"
                          },
                          v2
                        ],
                        "handle": "connection",
                        "key": "ListComments_comments",
                        "filters": []
                      },
                      v4
                    ]
                  },
                  v5
                ]
              },
              v6
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allPosts",
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "pCursor",
                "type": "String"
              },
              v2,
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
(node/*: any*/).hash = '5d26fb4d9b772d8d1dbc7251c1fabdc5';
module.exports = node;
