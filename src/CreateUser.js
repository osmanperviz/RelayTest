import React from 'react'
import CreateUserMutation from './CreateUserMutation.js'

class CreateUser extends React.Component {

constructor() {
  super()
  this.state = {
    name: '',
    imageUrl: ''
  }
}

_handleCreate = () => {
  const { name, imageUrl } = this.state
  CreateUserMutation(name, imageUrl)
}
render () {
    return (
      <div className='w-100 pa4 flex justify-center'>
        <div style={{ maxWidth: 400 }} className=''>
          <input
            className='w-100 pa3 mv2'
            value={this.state.description}
            placeholder='Description'
            onChange={(e) => this.setState({name: e.target.value})}
          />
          <input
            className='w-100 pa3 mv2'
            value={this.state.imageUrl}
            placeholder='Image Url'
            onChange={(e) => this.setState({imageUrl: e.target.value})}
          />
          {this.state.imageUrl &&
            <img src={this.state.imageUrl} className='w-100 mv3' />
          }

          <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this._handleCreate}>Create User</button>

        </div>
      </div>
    )
  }
}
export default CreateUser
