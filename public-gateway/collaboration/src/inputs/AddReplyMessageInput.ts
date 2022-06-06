import { Field }     from '@nestjs/graphql'
import { ID }        from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ChangeReplyStatusInput {
  @Field((type) => ID)
  replyId: string

  @Field()
  status: string
}
