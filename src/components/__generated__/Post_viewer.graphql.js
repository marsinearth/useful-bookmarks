/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Comment_viewer$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Post_viewer$ref: FragmentReference;
export type Post_viewer = {|
  +id: string,
  +User: ?{|
    +id: string,
    +name: string,
  |},
  +$fragmentRefs: Comment_viewer$ref,
  +$refType: Post_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Post_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id",
      "type": "ID"
    }
  ],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Comment_viewer",
      "args": null
    },
    v0,
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
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = 'f9fd2f1ea4eb9385dd86289e7951724a';
module.exports = node;
