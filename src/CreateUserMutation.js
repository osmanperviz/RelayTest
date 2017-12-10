import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from './Environment'


const mutation = graphql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUserMutation(input: $input) {
      user {
        name
        imageUrl
      }
    }
  }
`

export default (name, imageUrl, callback) => {
  new Promise((resolve, reject) => {
    const variables = {
       input: {
         name,
         imageUrl,
         clientMutationId: ""
       },
     }

     commitMutation(
       environment,
       {
         mutation,
         variables,
         onCompleted: (resp, err) => {

         },
         onError: err => console.error(err),
       },
      )
  })
}
