import { graphql, requestSubscription } from 'react-relay'
import environment from '../Environment'

const userCreatedSubscription = graphql `
  subscription userCreatedSubscription {
    userCreated {
      id
      name
      imageUrl
      totalPosts
    }
  }
`

export default () => {
    const subscriptionConfig = {
    subscription: userCreatedSubscription,
    variables: {},
    updater: store => {
      const root = store.getRoot().getLinkedRecord('viewer')
      const records = root.getLinkedRecords('users')
      const newUser = store.getRootField('userCreated')

      root.setLinkedRecords(records.concat(newUser), 'users');
    },
    onError: (error) => console.log("EROR!!!!!",error)
  }

  requestSubscription(
    environment,
    subscriptionConfig
  )
}
