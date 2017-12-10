import express from 'express'
import {createServer} from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { subscribe, execute } from 'graphql'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'

import {schema} from './schema';
import bodyParser from 'body-parser';
import cors from 'cors';

import {users} from './db'


let app  = express();
let PORT = 3001;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlExpress({
    context: {
      users
    },
    schema: schema
  })
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
  })
)

const server = createServer(app)

server.listen(PORT, err => {
  if (err) throw err
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema,
      onConnect: () => console.log('Client connected')
    },
    {
      server,
      path: '/subscriptions'
    }
  )
  debugger

  console.log(`> Ready on PORT ${PORT}`)
})
