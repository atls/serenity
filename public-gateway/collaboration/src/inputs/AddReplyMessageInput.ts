import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class ChangeReplyStatusInput {
  @Field((type) => ID)
  replyId: string

  @Field()
  status: string
}
