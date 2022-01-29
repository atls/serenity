import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class AddReplyMessageInput {
  @Field((type) => ID)
  replyId: string

  @Field()
  message: string
}
