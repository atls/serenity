import { Profile } from '@public-gateway/identity'
import { Field, ObjectType } from '@nestjs/graphql'

import { Activity } from './Activity'
import { CustomerMember } from './CustomerMember'

@ObjectType()
export class ProjectOwner {
  @Field(type => Profile)
  profile: Profile

  @Field(type => CustomerMember)
  member: CustomerMember

  @Field(type => Activity, { nullable: true })
  activity?: Activity
}
