/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Comment_comment$ref = any;
export type Comment_comment = {
    readonly id: string;
    readonly content: string;
    readonly commentedBy: {
        readonly id: string;
        readonly name: string;
    } | null;
    readonly commentedPost: {
        readonly id: string;
    } | null;
    readonly " $refType": Comment_comment$ref;
};



const node: ReaderFragment = (function(){
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
(node as any).hash = '8bc781a29aec9412dbc4d0d66f24403d';
export default node;
