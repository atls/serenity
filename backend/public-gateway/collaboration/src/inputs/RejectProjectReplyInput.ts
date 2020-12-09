import { Field, InputType } from 'type-graphql'

@InputType()
export class RejectProjectReplyInput {
  @Field()
  projectId: string
}
