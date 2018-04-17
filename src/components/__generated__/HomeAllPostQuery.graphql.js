/**
 * @flow
 * @relayHash 36464199cff6b4ae81bd7cfea4d5d9e2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListPage_viewer$ref = any;
export type HomeAllPostQueryVariables = {|
  id: ?string,
|};
export type HomeAllPostQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: ListPage_viewer$ref,
  |},
|};
*/


/*
query HomeAllPostQuery(
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
  allPosts(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        ...Post_post
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

fragment Post_viewer on Viewer {
  id
}

fragment Post_post on Post {
  id
  description
  imageUrl
  siteUrl
  comments(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        ...Comment_comment
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

fragment Comment_comment on Comment {
  id
  content
  commentedBy {
    id
    name
  }
  commentedPost {
    id
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "Literal",
  "name": "last",
  "value": 100,
  "type": "Int"
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v7 = {
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomeAllPostQuery",
  "id": null,
  "text": "query HomeAllPostQuery(\n  $id: ID\n) {\n  viewer {\n    ...ListPage_viewer\n    id\n  }\n}\n\nfragment ListPage_viewer on Viewer {\n  ...Post_viewer\n  User(id: $id) {\n    name\n    id\n  }\n  allPosts(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Post_post\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Post_viewer on Viewer {\n  id\n}\n\nfragment Post_post on Post {\n  id\n  description\n  imageUrl\n  siteUrl\n  comments(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Comment_comment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  content\n  commentedBy {\n    id\n    name\n  }\n  commentedPost {\n    id\n    description\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HomeAllPostQuery",
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
    "name": "HomeAllPostQuery",
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
            "selections": [
              v2,
              v1
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allPosts",
            "storageKey": "allPosts(last:100,orderBy:\"createdAt_DESC\")",
            "args": [
              v3,
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
                      v4,
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
                        "name": "comments",
                        "storageKey": "comments(last:100,orderBy:\"createdAt_DESC\")",
                        "args": [
                          v3,
                          {
                            "kind": "Literal",
                            "name": "orderBy",
                            "value": "createdAt_DESC",
                            "type": "CommentOrderBy"
                          }
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
                                    "selections": [
                                      v1,
                                      v2
                                    ]
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
                                      v1,
                                      v4
                                    ]
                                  },
                                  v5
                                ]
                              },
                              v6
                            ]
                          },
                          v7
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "comments",
                        "args": [
                          v3,
                          {
                            "kind": "Literal",
                            "name": "orderBy",
                            "value": "createdAt_DESC",
                            "type": "CommentOrderBy"
                          }
                        ],
                        "handle": "connection",
                        "key": "Post_comments",
                        "filters": []
                      },
                      v5
                    ]
                  },
                  v6
                ]
              },
              v7
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allPosts",
            "args": [
              v3,
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
(node/*: any*/).hash = '215080d67acc54809a1ec09dd455228b';
module.exports = node;
