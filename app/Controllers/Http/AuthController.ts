import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async register({ request, auth }: HttpContextContract ) {
    const userData = request.only([
      'username', 
      'email', 
      'password', 
      'username', 
      'lastName', 
      'birthday', 
      'phone' 
    ])

    const user = await User.create(userData)

    await auth.login(user)

    return user
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const user = await User.query()
                            .where('email', email)
                            .first()
    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    if (!(await Hash.verify(user.password, password))) {
      throw new Error('Email ou senha invalidos')
    }

    const token = await auth.use('api').generate(user, { expiresIn: '24h' })
      return {token, user}
    } catch(e){
      return response.unauthorized(e)
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.redirect('/')
  }
}
