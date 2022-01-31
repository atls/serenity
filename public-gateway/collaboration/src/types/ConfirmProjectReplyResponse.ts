import { Field, ObjectType } from '@nestjs/graphql'

import { ConfirmProjectReplyErrors } from './ConfirmProjectReplyErrors'
import { Reply } from './Reply'

@ObjectType()
export class ConfirmProjectReplyResponse {
  @Field(type => Reply, { nullable: true })
  result?: Reply

  @Field(type => ConfirmProjectReplyErrors, { nullable: true })
  errors?: ConfirmProjectReplyErrors
}
