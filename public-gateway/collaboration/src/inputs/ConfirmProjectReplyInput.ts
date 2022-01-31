import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ConfirmProjectReplyInput {
  @Field()
  projectId: string
}
