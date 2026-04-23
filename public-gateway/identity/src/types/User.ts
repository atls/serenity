import { Field }            from '@nestjs/graphql'
import { ObjectType }       from '@nestjs/graphql'
import { Discussion }       from '@public-gateway/collaboration'
import { Project }          from '@public-gateway/collaboration'
import { Reply }            from '@public-gateway/collaboration'
import { SpecialistMember } from '@public-gateway/collaboration/src/types/SpecialistMember'
import { Portfolio }        from '@public-gateway/portfolio'

import { Email }            from './Email'
import { Profile }          from './Profile'

@ObjectType()
export class User {
  @Field()
  id: string

  @Field((type) => Email)
  email: Email

  @Field((type) => Profile, { nullable: true })
  profile: Profile

  @Field((type) => [Portfolio])
  portfolio: Portfolio[]

  @Field((type) => SpecialistMember, { nullable: true })
  member: SpecialistMember

  @Field((type) => [Project])
  projects: Project[]

  @Field((type) => [Reply])
  replies: Reply[]

  @Field((type) => [Discussion])
  discussions: Discussion[]
}
