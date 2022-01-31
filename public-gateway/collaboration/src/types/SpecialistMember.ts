import { Field, ObjectType } from '@nestjs/graphql'

import { Account } from './Account'
import { Interaction } from './Interaction'
import { Specialisation } from './Specialisation'

@ObjectType()
export class SpecialistMember {
  @Field()
  id: string

  @Field()
  rating: number

  @Field()
  reviewCount: number

  @Field()
  completedProjects: number

  @Field({ nullable: true })
  interaction: Interaction

  @Field({ nullable: true })
  specialisation: Specialisation

  @Field(type => Account)
  account: Account

  @Field({ nullable: true })
  description: string
}
