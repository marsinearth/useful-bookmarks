/**
 * @flow
 * @relayHash 26fcf247c64d9e3358c3a3a875336fdc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePostViewerQueryVariables = {|
  initCount: number
|};
export type CreatePostViewerQueryResponse = {|
  +viewer: {|
    +id: string,
    +allPosts: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +id: string
        |}
      |}>
    |},
  |}
|};
export type CreatePostViewerQuery = {|
  variables: CreatePostViewerQueryVariables,
  response: CreatePostViewerQueryResponse,
|};
*/


/*
query CreatePostViewerQuery(
  $initCount: Int!
) {
  viewer {
    id
    allPosts(last: $initCount, orderBy: createdAt_DESC) {
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
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "initCount",
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
],
v3 = [
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "initCount",
    "type": "Int"
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "createdAt_DESC",
    "type": "PostOrderBy"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CreatePostViewerQuery",
  "id": null,
  "text": "query CreatePostViewerQuery(\n  $initCount: Int!\n) {\n  viewer {\n    id\n    allPosts(last: $initCount, orderBy: createdAt_DESC) {\n      edges {\n        node {\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": "initCount",
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
            "alias": "allPosts",
            "name": "__ListPage_allPosts_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "PostConnection",
            "plural": false,
            "selections": v2
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePostViewerQuery",
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
            "args": v3,
            "concreteType": "PostConnection",
            "plural": false,
            "selections": v2
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allPosts",
            "args": v3,
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
// prettier-ignore
(node/*: any*/).hash = 'a63dfa49d78b7882b2f09115974cc769';
module.exports = node;
