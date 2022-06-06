import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ConfirmProjectReplyErrors {
  @Field({ nullable: true })
  projectId?: string
}
