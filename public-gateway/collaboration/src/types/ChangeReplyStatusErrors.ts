import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ChangeReplyStatusErrors {
  @Field({ nullable: true })
  replyId?: string

  @Field({ nullable: true })
  status?: string
}
