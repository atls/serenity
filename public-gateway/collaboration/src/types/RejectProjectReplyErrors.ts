import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class RejectProjectReplyErrors {
  @Field({ nullable: true })
  projectId?: string
}
