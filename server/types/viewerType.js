import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString
} from 'graphql';

import { globalIdField, connectionArgs, connectionFromArray, fromGlobalId} from 'graphql-relay'
import db from '../db'
import userType from './userType'
import postType from './postType'

const {postConnection} = require('./postType')

const viewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    id: globalIdField('Viewer'),
    users: {
      type: new GraphQLList(userType),
      resolve(_, args, {users}) {
        return users
      }
    },
    user: {
      type: userType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(_, args, {users}) {
        return users.find((user) => user.id === Number(args.id))
      }
    },
    posts: {
      type: postConnection.connectionType,
      args: connectionArgs,
      resolve: (obj, args) => connectionFromArray(db.posts, args),
    },
    post: {
      type: postType,
      args: {
        postId: { type: GraphQLString },
      },
      resolve: (obj, { postId }, { db }) => db.getPost(fromGlobalId(postId).id),
    },
  }),
})


export default viewerType
