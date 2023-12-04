import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from "App/Models/Post"

export default class PostsController {
  public async store({request, auth, response}: HttpContextContract) {
    const body = request.body()
    const user = auth.user!

    body.userId = user.id

    const post = await Post.create(body)
    response.status(201)

    return {
      message: 'Post create with success!',
      data: post
    }
  }

  public async index() {
    const posts = await Post.all()
    
    return {
      data: posts
    }
  }

  public async show({params}: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    return {
      data: post
    }
  }
}
