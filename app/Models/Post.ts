import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Commentary from './Commentary'

export default class Post extends BaseModel {
  @hasMany(() => Commentary)
  public commentary: HasMany<typeof Commentary>

  @column({ isPrimary: true })
  public id: number

  @column()
  public textPost: String

  @column()
  public username: String

  @column()
  public userId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
