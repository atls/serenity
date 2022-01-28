import { Field }     from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class AddProjectReplyInput {
  @Field()
  projectId: string

  @Field()
  message: string
}
