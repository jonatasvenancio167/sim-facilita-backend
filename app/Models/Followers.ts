import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Followers extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public follower_id: number

  @column()
  public following_id: number

  @belongsTo( () => User, { foreignKey: 'follower_id' })
  public follower: BelongsTo<typeof User>

  @belongsTo( () => User, { foreignKey: 'following_id' })
  public following: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
