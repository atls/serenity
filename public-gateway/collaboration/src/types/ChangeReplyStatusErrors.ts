import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ChangeReplyStatusErrors {
  @Field({ nullable: true })
  replyId?: string

  @Field({ nullable: true })
  status?: string
}
