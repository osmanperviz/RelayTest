import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import socket from '../socket'
import { mutationWithClientMutationId } from 'graphql-relay'

//import {userType} from '../types
const types = require('../types')

export default mutationWithClientMutationId({
  name: 'CreateUser',
  inputFields: {
    name: {
      name: 'User Name',
      type: new GraphQLNonNull(GraphQLString),
    },
    imageUrl: {
      name: 'Image URL',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    user: {
      type: types.userType.default,
      resolve: payload => payload.user,
    }
  },
  mutateAndGetPayload: (input, { users }) => {
    const newUser = { id: (new Date()).getTime(), name: input.name, imageUrl: input.imageUrl }
    users.push(newUser)
    socket.publish("USER_CREATED", {userCreated: newUser})
    return { user: newUser }
  }
})
