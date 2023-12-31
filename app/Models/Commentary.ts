import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import User from './User'

export default class Commentary extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public textCommentary: String

  @column()
  public username: String

  @column()
  public date: String

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Post)
  public post: HasMany<typeof Post>

  @column()
  public userId: number

  @column()
  public postId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
