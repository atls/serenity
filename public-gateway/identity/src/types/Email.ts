import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Email {
  @Field()
  address: string

  @Field()
  verified: boolean
}
