import { Field, InputType } from 'type-graphql'

@InputType()
export class ConfirmProjectReplyInput {
  @Field()
  projectId: string
}
