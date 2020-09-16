import { Field, ObjectType } from 'type-graphql'

import { Email } from './Email'
import { Profile } from './Profile'

@ObjectType()
export class User {
  @Field()
  id: string

  @Field(type => Email)
  email: Email

  @Field(type => Profile, { nullable: true })
  profile: Profile
}
