import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ChangeReplyStatusErrors {
  @Field({ nullable: true })
  replyId?: string

  @Field({ nullable: true })
  status?: string
}
