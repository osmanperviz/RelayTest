import socket from '../socket'
import userType  from '../types/userType'

module.exports = {
  type: userType,
  subscribe: () => {
    return socket.asyncIterator('USER_CREATED')
  }
}
