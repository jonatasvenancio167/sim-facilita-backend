import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Followers from "App/Models/Followers"

export default class FollowersController {

  public async followers({ params, response }: HttpContextContract) {
    const userId = params.id
    const followers = await Followers.query()
                                     .where('following_id', userId)
                                     .preload('follower')
    
    return response.json({ followers })
  }

  public async following({ params, response }: HttpContextContract) {
    const userId = params.id
    const following = await Followers.query()
                                     .where('follower_id', userId)
                                     .preload('following')
  
    return response.json({ following })
  }

  public async isFollowing({ params, auth, response }: HttpContextContract) {
    const userId = auth.user!.id
    const otherUserId = params.id

    const isFollowing = await Followers.query()
                                       .where('follower_id', userId)
                                       .where('following_id', otherUserId)
                                       .first()

    return response.json({
      isFollowing: !!isFollowing,
    })
  }

  public async followUser({response, auth, params}: HttpContextContract) {
    const followerId = auth.user!.id
    const followingId = params.id

    if (followerId === followingId) {
      return response.status(400).json({
        error: 'Cannot follow yourself.',
      })
    }

    const existingFollower = await Followers.query()
                                            .where('follower_id', followerId)
                                            .where('following_id', followingId)
                                            .first()
    
    if(existingFollower) {
      return response.status(400).json({
        error: 'Already following this user.',
      })
    }

    await Followers.create({
      follower_id: followerId,
      following_id: followingId,
    })

    return response.json({
      message: 'User followed successfully.'
    })
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
