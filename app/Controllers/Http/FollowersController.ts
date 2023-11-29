import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Followers from "App/Models/Followers"

export default class FollowersController {
  public async store({request, response}: HttpContextContract) {
    const body = request.body()
    const commentary = await Followers.create(body)

    response.status(201)

    return {
      message: 'Commentary create with success!',
      data: commentary
    }
  }

  public async index() {
    const followers = await Followers.all()

    return {
      data: followers
    }
  }

  public async show({params}: HttpContextContract) {
    const followers = await Followers.findOrFail(params.id)

    return {
      data: followers
    }
  }

  public async destroy({params}: HttpContextContract) {
    const followers = await Followers.findOrFail(params.id) 
    
    await followers.delete()

    return {
      message: 'Followers delete with success!',
      data: followers
    }
  }
}
