  import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay'

import {userType, postType} from './types'
import {User, Post, users,posts} from './db'

const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      return users.find((user) => user.id === Number(id));
    } else if (type === 'Post') {
      return posts.find((post) => post.id === Number(id))
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof User) {
      return userType;
    } else if (obj instanceof Post) {
      return postType
    } else {
      return null;
    }
  }
);

module.exports =  {
  nodeInterface: nodeInterface,
  nodeField: nodeField
}
