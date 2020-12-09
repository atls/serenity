import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ConfirmProjectReplyErrors {
  @Field({ nullable: true })
  projectId?: string
}
