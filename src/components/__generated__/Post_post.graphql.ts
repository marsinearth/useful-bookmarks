/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type ListComments_post$ref = any;
export type Post_post$ref = any;
export type Post_post = {
    readonly id: string;
    readonly description: string;
    readonly imageUrl: string;
    readonly siteUrl: string;
    readonly postedBy: {
        readonly id: string;
        readonly name: string;
    } | null;
    readonly " $fragmentRefs": ListComments_post$ref;
    readonly " $refType": Post_post$ref;
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
  "name": "Post_post",
  "type": "Post",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
      "kind": "FragmentSpread",
      "name": "ListComments_post",
      "args": null
    }
  ]
};
})();
(node as any).hash = '51aec05c9c1cc80e60f5ceea3dfd0035';
export default node;
