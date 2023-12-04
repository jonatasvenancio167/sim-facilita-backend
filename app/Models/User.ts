import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
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
  public username: string

  @column()
  public lastName: string

  @column()
  public birthday: Date

  @column()
  public phone: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (User: User) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }
}
