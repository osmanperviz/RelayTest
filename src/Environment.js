import { SubscriptionClient } from 'subscriptions-transport-ws';

import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'


const store = new Store(new RecordSource())

const fetchQuery = (operation, variables) => {
  return fetch('http://localhost:3001/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `bearer ${localStorage.get}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const setupSubscription = (config, variables, cacheConfig, observer) => {
   const query = config.text
  //
   const subscriptionClient = new SubscriptionClient('ws://localhost:3001/subscriptions', {reconnect: true})

   const client = subscriptionClient.request({ query, variables }).subscribe({
      next: result => {
        observer.onNext({ data: result.data });
        console.log("next");
      },
      complete: () => {
        observer.onCompleted();
        console.log("complete");
      },
      error: error => {
        observer.onError(error);
        console.log(error);
      }
  });

  return {
    dispose: client.unsubscribe
  };
}

const network = Network.create(fetchQuery, setupSubscription)


const environment = new Environment({
  network,
  store,
})

export default environment
