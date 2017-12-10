import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import subscriptions from './subscriptions'
import viewerType from './types/viewerType'
import {createUserMutation} from './mutations'
import {nodeField} from './interface'

const mutationType = new GraphQLObjectType({
   name: 'Mutation',
    fields: {
     createUserMutation: createUserMutation
   }
})

const subscriptionType = new GraphQLObjectType({
   name: 'Subscription',
   fields: subscriptions
})

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      node: nodeField,
      viewer: {
        type: viewerType,
        resolve: () => ({})
      }
    }
  }),
  mutation: mutationType,
  subscription: subscriptionType
});
