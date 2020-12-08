import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ProjectAddress {
  @Field({ nullable: true })
  formatted: string
}
