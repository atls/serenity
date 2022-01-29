import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class AddDiscussionMessageInput {
  @Field((type) => ID)
  recipientId: string

  @Field()
  message: string
}
