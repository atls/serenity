import { Field }                    from '@nestjs/graphql'
import { ObjectType }               from '@nestjs/graphql'

import { RejectProjectReplyErrors } from './RejectProjectReplyErrors.js'
import { Reply }                    from './Reply.js'

@ObjectType()
export class RejectProjectReplyResponse {
  @Field((type) => Reply, { nullable: true })
  result?: Reply

  @Field((type) => RejectProjectReplyErrors, { nullable: true })
  errors?: RejectProjectReplyErrors
}
