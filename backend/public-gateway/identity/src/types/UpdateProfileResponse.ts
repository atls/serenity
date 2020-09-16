import { Field, ObjectType } from 'type-graphql'

import { Profile } from './Profile'
import { UpdateProfileErrors } from './UpdateProfileErrors'

@ObjectType()
export class UpdateProfileResponse {
  @Field(type => Profile, { nullable: true })
  result?: Profile

  @Field(type => UpdateProfileErrors, { nullable: true })
  errors?: UpdateProfileErrors
}
