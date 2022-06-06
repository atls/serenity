import { Field }     from '@nestjs/graphql'
import { ID }        from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class AddDiscussionMessageInput {
  @Field((type) => ID)
  recipientId: string

  @Field()
  message: string
}
