import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Account {
  @Field()
  type: string

  @Field()
  replyLimited: boolean
}
