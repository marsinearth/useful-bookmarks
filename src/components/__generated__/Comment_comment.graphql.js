/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Comment_comment$ref: FragmentReference;
export type Comment_comment = {|
  +id: string,
  +content: string,
  +commentedBy: ?{|
    +id: string,
    +name: string,
  |},
  +commentedPost: ?{|
    +id: string
  |},
  +$refType: Comment_comment$ref,
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
  "name": "Comment_comment",
  "type": "Comment",
  "metadata": null,
  "argumentDefinitions": [],
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '8bc781a29aec9412dbc4d0d66f24403d';
module.exports = node;
