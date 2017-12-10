
class User extends Object {}
class Post extends Object {}

let user1 = new User({id: 1, name: 'user1',imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/b9/ba/b9/b9bab9dcacb9efde92e015af07834473.jpg"})
let user2 = new User({id: 2, name: 'user2',imageUrl: "http://www.cutestpaw.com/wp-content/uploads/2015/09/s-Howdy-partner.jpeg"})

let post1 = new Post({id: 1, name: 'user post 1', authorId: 1, description: "some desc post 1"})
let post2 = new Post({id: 2, name: 'user post 1.1', authorId: 1, description: "some desc post 1.1"})
let post3 = new Post({id: 3, name: 'user post 2', authorId: 2, description: "some desc post 2"})
let post4 = new Post({id: 4, name: 'user post 2.1', authorId: 2, description: "some desc post 2.2"})


let users = [user1, user2]
let posts = [post1, post2, post3, post4]

module.exports = {
  users,
  posts,
  User,
  Post
}
