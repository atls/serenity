import { Field, InputType } from 'type-graphql'

@InputType()
export class AddProjectReplyInput {
  @Field()
  projectId: string

  @Field()
  message: string
}
