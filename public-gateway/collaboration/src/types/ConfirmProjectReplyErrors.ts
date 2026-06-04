import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ConfirmProjectReplyErrors {
  @Field({ nullable: true })
  projectId?: string
}
