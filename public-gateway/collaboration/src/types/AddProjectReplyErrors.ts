import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AddProjectReplyErrors {
  @Field({ nullable: true })
  projectId?: string

  @Field({ nullable: true })
  message?: string
}
