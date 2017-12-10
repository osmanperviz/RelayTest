import { GraphQLObjectType, GraphQLString } from 'graphql'
import { globalIdField, connectionDefinitions } from 'graphql-relay'
import userType from './userType'

const postType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: globalIdField('Post'),
    name: { type: GraphQLString },
    author: {
      type: userType,
      description: 'The posts creator',
      resolve: (post, args, { users }) => users.find((user) => user.id === post.authorId),
     },
    description: {
     type: GraphQLString,
     description: 'The posts description',
   },
 }),
})

export const postConnection = connectionDefinitions({
  name: 'Post',
  nodeType: postType,
})

export default postType
