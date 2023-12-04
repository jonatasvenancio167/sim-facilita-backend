import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Commentary from "App/Models/Commentary"
import Post from 'App/Models/Post'
import User from 'App/Models/User'

export default class CommentariesController {
  public async store({request, response, params, auth}: HttpContextContract) {
    const body = request.body()
    const user = auth.user!
    const postId = params.postId

    await Post.findOrFail(postId)

    body.userId = user.id
    body.postId = postId

    const commentary = await Commentary.create(body)

    response.status(201)

    return {
      message: 'Commentary create with success!',
      data: commentary
    }
  }
}
