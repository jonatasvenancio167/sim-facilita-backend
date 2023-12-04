import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async store({request, response}: HttpContextContract) {
    const body = request.body()
    const user = await User.create(body)

    response.status(201)

    return {
      message: 'User create with success!',
      data: user
    }
  }

  public async index({ auth }) {
    const user = auth.user!
    // const users = await User.query()
    //                         .preload('posts')
    //                         .preload('commentary')
    return {
      data: user
    }
  }

  public async show({params}: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    return {
      data: user
    }
  }

  public async destroy({params}: HttpContextContract) {
    const user = await User.findOrFail(params.id) 
    
    await user.delete()

    return {
      message: 'User delete with success!',
      data: user
    }
  }

  public async update({params, request}: HttpContextContract) {
    const body = request.body()
    const user = await User.findOrFail(params.id)

    user.username = body.name
    user.lastName = body.lastName
    user.birthday = body.birthday
    user.phone = body.phone
    user.email = body.mail
    user.password = body.password

    await user.save()

    return {
      message: 'user uptaded with success!',
      data: user
    }
  }
}
