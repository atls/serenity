import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class AddReplyMessageErrors {
  @Field({ nullable: true })
  replyId?: string

  @Field({ nullable: true })
  message?: string
}
