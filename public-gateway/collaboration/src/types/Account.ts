import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Account {
  @Field()
  type: string

  @Field()
  replyLimited: boolean
}
