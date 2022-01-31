import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CustomerMember {
  @Field()
  openProjects: number

  @Field()
  completedProjects: number
}
