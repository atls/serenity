import { Field }               from '@nestjs/graphql'
import { ObjectType }          from '@nestjs/graphql'

import { Profile }             from './Profile.js'
import { UpdateProfileErrors } from './UpdateProfileErrors.js'

@ObjectType()
export class UpdateProfileResponse {
  @Field((type) => Profile, { nullable: true })
  result?: Profile

  @Field((type) => UpdateProfileErrors, { nullable: true })
  errors?: UpdateProfileErrors
}
