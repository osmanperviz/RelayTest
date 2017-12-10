/**
 * @flow
 * @relayHash 25fa945c85589b571478455921605996
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type userCreatedSubscriptionVariables = {| |};
export type userCreatedSubscriptionResponse = {|
  +userCreated: ?{|
    +id: string;
    +name: ?string;
    +imageUrl: ?string;
    +totalPosts: ?string;
  |};
|};
*/


/*
subscription userCreatedSubscription {
  userCreated {
    id
    name
    imageUrl
    totalPosts
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "userCreatedSubscription",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "userCreated",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "imageUrl",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "totalPosts",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "userCreatedSubscription",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "userCreatedSubscription",
    "operation": "subscription",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "userCreated",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "imageUrl",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "totalPosts",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "subscription userCreatedSubscription {\n  userCreated {\n    id\n    name\n    imageUrl\n    totalPosts\n  }\n}\n"
};

module.exports = batch;
