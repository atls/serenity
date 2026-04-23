import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AddReplyMessageErrors {
  @Field({ nullable: true })
  replyId?: string

  @Field({ nullable: true })
  message?: string
}
