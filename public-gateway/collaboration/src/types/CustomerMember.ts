import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class CustomerMember {
  @Field()
  openProjects: number

  @Field()
  completedProjects: number
}
