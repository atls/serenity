import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Account {
  @Field()
  type: string

  @Field()
  replyLimited: boolean
}
