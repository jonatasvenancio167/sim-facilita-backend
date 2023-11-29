import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Commentary from "App/Models/Commentary"
import Post from 'App/Models/Post'
import User from 'App/Models/User'

export default class CommentariesController {
  public async store({request, response, params}: HttpContextContract) {
    const body = request.body()
    const userId = params.userId
    const postId = params.postId

    await User.findOrFail(userId)
    await Post.findOrFail(postId)

    body.userId = userId
    body.postId = postId

    const commentary = await Commentary.create(body)

    response.status(201)

    return {
      message: 'Commentary create with success!',
      data: commentary
    }
  }
}
