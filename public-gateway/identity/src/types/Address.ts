import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Address {
  @Field({ nullable: true })
  formatted: string
}
