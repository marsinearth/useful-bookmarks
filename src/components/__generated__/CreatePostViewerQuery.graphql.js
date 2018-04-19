/**
 * @flow
 * @relayHash 82fdcccf79b00c2b805c43c5b351994f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePostViewerQueryVariables = {| |};
export type CreatePostViewerQueryResponse = {|
  +viewer: {|
    +id: string,
    +allPosts: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +id: string,
        |},
      |}>,
    |},
  |},
|};
*/


/*
query CreatePostViewerQuery {
  viewer {
    id
    allPosts(last: 100, orderBy: createdAt_DESC) {
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
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
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
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CreatePostViewerQuery",
  "id": null,
  "text": "query CreatePostViewerQuery {\n  viewer {\n    id\n    allPosts(last: 100, orderBy: createdAt_DESC) {\n      edges {\n        node {\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "viewer",
          "allPosts"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "CreatePostViewerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
          v0,
          {
            "kind": "LinkedField",
            "alias": "allPosts",
            "name": "__ListPage_allPosts_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "PostConnection",
            "plural": false,
            "selections": v1
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePostViewerQuery",
    "argumentDefinitions": [],
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
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allPosts",
            "storageKey": "allPosts(last:100,orderBy:\"createdAt_DESC\")",
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 100,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "createdAt_DESC",
                "type": "PostOrderBy"
              }
            ],
            "concreteType": "PostConnection",
            "plural": false,
            "selections": v1
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allPosts",
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 100,
                "type": "Int"
              },
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
(node/*: any*/).hash = 'c5bb9e4ee9f58b213e723aae7798476b';
module.exports = node;
