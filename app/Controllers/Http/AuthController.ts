import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, auth }: HttpContextContract ) {
    const userData = request.only(['username', 'email', 'password'])
    const user = await User.create(userData)

    await auth.login(user)

    return user
  }

  public async login({ request, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])
    await auth.attempt(email, password)

    return auth.user
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.redirect('/')
  }
}
