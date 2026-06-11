import { Field }          from '@nestjs/graphql'
import { ObjectType }     from '@nestjs/graphql'
import { Profile }        from '@public-gateway/identity'

import { Activity }       from './Activity.js'
import { CustomerMember } from './CustomerMember.js'

@ObjectType()
export class ProjectOwner {
  @Field((type) => Profile)
  profile: Profile

  @Field((type) => CustomerMember)
  member: CustomerMember

  @Field((type) => Activity, { nullable: true })
  activity?: Activity
}
