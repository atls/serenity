import { Field }                     from '@nestjs/graphql'
import { ObjectType }                from '@nestjs/graphql'

import { ConfirmProjectReplyErrors } from './ConfirmProjectReplyErrors.js'
import { Reply }                     from './Reply.js'

@ObjectType()
export class ConfirmProjectReplyResponse {
  @Field((type) => Reply, { nullable: true })
  result?: Reply

  @Field((type) => ConfirmProjectReplyErrors, { nullable: true })
  errors?: ConfirmProjectReplyErrors
}
