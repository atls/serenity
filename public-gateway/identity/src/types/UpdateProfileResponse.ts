import { Field }               from '@nestjs/graphql'
import { ObjectType }          from '@nestjs/graphql'

import { Profile }             from './Profile'
import { UpdateProfileErrors } from './UpdateProfileErrors'

@ObjectType()
export class UpdateProfileResponse {
  @Field((type) => Profile, { nullable: true })
  result?: Profile

  @Field((type) => UpdateProfileErrors, { nullable: true })
  errors?: UpdateProfileErrors
}
