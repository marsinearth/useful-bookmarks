/**
 * @flow
 * @relayHash f007406cf3a343b4fc423e212eacbbcb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Post_post$ref = any;
export type PostRefetchQueryVariables = {| |};
export type PostRefetchQueryResponse = {|
  +viewer: {|
    +Post: ?{|
      +$fragmentRefs: Post_post$ref,
    |},
  |},
|};
*/


/*
query PostRefetchQuery {
  viewer {
    Post {
      ...Post_post
      id
    }
    id
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  v0,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PostRefetchQuery",
  "id": null,
  "text": "query PostRefetchQuery {\n  viewer {\n    Post {\n      ...Post_post\n      id\n    }\n    id\n  }\n}\n\nfragment Post_post on Post {\n  id\n  description\n  imageUrl\n  siteUrl\n  postedBy {\n    id\n    name\n  }\n  ...ListComments_post\n}\n\nfragment ListComments_post on Post {\n  id\n  comments(first: $count, after: $cCursor) {\n    edges {\n      node {\n        ...Comment_comment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    count\n  }\n}\n\nfragment Comment_comment on Comment {\n  id\n  content\n  commentedBy {\n    id\n    name\n  }\n  commentedPost {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PostRefetchQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Post",
            "storageKey": null,
            "args": null,
            "concreteType": "Post",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Post_post",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PostRefetchQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Post",
            "storageKey": null,
            "args": null,
            "concreteType": "Post",
            "plural": false,
            "selections": [
              v0,
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
                "selections": v1
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
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
                    "type": "Int"
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
                          v0,
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
                            "selections": v1
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
                              v0
                            ]
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
                  },
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
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "key": "ListComments_comments",
                "filters": []
              }
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '194e97bfa8f706cc4055ffd4caed8054';
module.exports = node;
