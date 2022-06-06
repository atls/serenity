import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AddReplyMessageErrors {
  @Field({ nullable: true })
  replyId?: string

  @Field({ nullable: true })
  message?: string
}
