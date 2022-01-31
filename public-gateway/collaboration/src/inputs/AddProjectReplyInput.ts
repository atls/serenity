import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class AddProjectReplyInput {
  @Field()
  projectId: string

  @Field()
  message: string
}
