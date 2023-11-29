import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Commentary from './Commentary'

export default class User extends BaseModel {
  @hasMany(() => Post)
  public posts: HasMany<typeof Post>

  @hasMany(() => Commentary)
  public commentary: HasMany<typeof Commentary>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public lastName: string

  @column()
  public birthday: Date

  @column()
  public phone: number

  @column()
  public mail: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
