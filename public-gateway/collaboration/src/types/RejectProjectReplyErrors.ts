import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class RejectProjectReplyErrors {
  @Field({ nullable: true })
  projectId?: string
}
