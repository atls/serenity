import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class AddProjectReplyErrors {
  @Field({ nullable: true })
  projectId?: string

  @Field({ nullable: true })
  message?: string
}
