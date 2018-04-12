/**
 * @flow
 * @relayHash d9f320f9e8a13c992b3859afeb73da19
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListPage_viewer$ref = any;
export type HomeAllPostQueryVariables = {|
  id?: ?string,
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomeAllPostQuery",
  "id": null,
  "text": "query HomeAllPostQuery(\n  $id: ID\n) {\n  viewer {\n    ...ListPage_viewer\n    id\n  }\n}\n\nfragment ListPage_viewer on Viewer {\n  ...Post_viewer\n  User(id: $id) {\n    name\n    id\n  }\n  allPosts(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Post_post\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Post_viewer on Viewer {\n  id\n}\n\nfragment Post_post on Post {\n  id\n  description\n  imageUrl\n  siteUrl\n}\n",
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              v1
            ]
          },
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
            ]
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
(node/*: any*/).hash = '215080d67acc54809a1ec09dd455228b';
module.exports = node;
