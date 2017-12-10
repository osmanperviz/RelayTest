import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class User extends Component {

  render () {
    console.log('Count:',this.props.user.totalPosts);
    return (
      <div className='pa3 bg-black-05 ma3'>
       <div
         className='w-100'
         style={{
           backgroundImage: `url(${this.props.user.imageUrl})`,
           backgroundSize: 'cover',
           paddingBottom: '100%',
         }}
       />
       <div className='pt3'>
         {this.props.user.name}
         <span className='red f6 pointer dim' onClick={this._handleDelete}>Delete</span>
       </div>
       <br />
       <div className='pt3'>
         Number of posts: {this.props.user.totalPosts}
       </div>
     </div>
    )
  }

}

export default createFragmentContainer(User, graphql`
  fragment User_user on User {
    id
    imageUrl
    name
    totalPosts
  }
`)
