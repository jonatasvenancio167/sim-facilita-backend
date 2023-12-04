/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'AuthController.login')
  Route.post('/logout', 'AuthController.logout')
  Route.post('/register', 'AuthController.register')

  Route.group(() => {
    Route.resource('/users', 'UsersController').apiOnly()
    Route.post('/users/:userId/posts', 'PostsController.store')
    Route.post('/posts/:postId/commentaries', 'CommentariesController.store')

    Route.resource('/post', 'PostsController')
  }).middleware(['auth'])

  Route.group(() => {
    Route.get('users/:userId/followers', 'FollowersController.followers')
    Route.get('users/:userId/following', 'FollowersController.following')
    Route.get('users/:userId/is-following', 'FollowersController.isFollowing')
    Route.post('users/:userId/follow', 'FollowersController.followUser')
  }).middleware(['auth'])
  
}).prefix('/api')
