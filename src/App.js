import React, { Component } from 'react';
import UsersList from './UsersList'
import CreateUser from './CreateUser'
import CreatePost from './CreateUser'
import './App.css';
import environment from './Environment'

import {
  QueryRenderer,
  graphql
} from 'react-relay'

const AppAllUsersQuery = graphql`
  query AppAllUsersQuery {
    viewer{
      id
      users {
        ...User_user
      }
    }
  }
`

class App extends Component {
  render () {
    return (
      <QueryRenderer
         environment={environment}
         query={AppAllUsersQuery}
         render={({error, props}) => {
           const path = window.location.pathname
           if (error) {
             return <div>{error.message}</div>
           } else if (props) {
             switch(path) {
              case "/":
                return <UsersList users={props.viewer.users} />
              case "/user/new":
                return <CreateUser />
              case "/user/posts/new":
                return <CreatePost />
              default:
                return null
           }
         }
           return <div>Loading</div>
         }}
       />
     )
  }
}

export default App;
