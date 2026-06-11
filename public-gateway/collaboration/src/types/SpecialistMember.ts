import { Field }          from '@nestjs/graphql'
import { ObjectType }     from '@nestjs/graphql'

import { Account }        from './Account.js'
import { Interaction }    from './Interaction.js'
import { Specialisation } from './Specialisation.js'

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

  @Field((type) => Account)
  account: Account

  @Field({ nullable: true })
  description: string
}
