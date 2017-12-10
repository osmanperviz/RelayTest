import React, { Component } from 'react';
import User from './User'
import userCreatedSubscription from './subscriptions/userCreatedSubscription'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class UsersList extends  Component {

  componentDidMount() {
    userCreatedSubscription()
  }

  render() {
   return (
     <div className='w-100 flex justify-center'>
       <div className='w-15' style={{ maxWidth: 400 }}>
       {this.props.users.map((user) =>
          <User key={user.id} user={user} />
       )}
       </div>
     </div>
   );
  }
}


export default createFragmentContainer(UsersList, graphql`
  fragment UsersList_user on Viewer  {
    users {
      id
      ...User_user
    }
  }
`)
