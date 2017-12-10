import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import {
  globalIdField,
  connectionArgs,
  connectionFromArray
} from 'graphql-relay';
import db from '../db'

import { nodeInterface } from '../interface'
const {postConnection} = require('./postType')

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    name: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    posts: {
      type: postConnection.connectionType,
      args: connectionArgs,
      resolve: (user, args) => {
         const userPosts = db.posts.filter((post) => post.authorId === user.id)
         return connectionFromArray(userPosts, args)
      },
    },
    totalPosts: {
      type: GraphQLString,
      resolve: (user, args) => {
         const userPosts = db.posts.filter((post) => post.authorId === user.id)
         return userPosts.length
      },
    }
  },
   interfaces: [nodeInterface],
})

export default userType
