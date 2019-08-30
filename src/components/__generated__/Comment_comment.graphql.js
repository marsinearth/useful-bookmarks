/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Comment_comment$ref: FragmentReference;
declare export opaque type Comment_comment$fragmentType: Comment_comment$ref;
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
export type Comment_comment$data = Comment_comment;
export type Comment_comment$key = {
  +$data?: Comment_comment$data,
  +$fragmentRefs: Comment_comment$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
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
    (v0/*: any*/),
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
        (v0/*: any*/),
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
        (v0/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '8bc781a29aec9412dbc4d0d66f24403d';
module.exports = node;
