import { Field }                 from '@nestjs/graphql'
import { ObjectType }            from '@nestjs/graphql'

import { AddProjectReplyErrors } from './AddProjectReplyErrors.js'
import { Reply }                 from './Reply.js'

@ObjectType()
export class AddProjectReplyResponse {
  @Field((type) => Reply, { nullable: true })
  result?: Reply

  @Field((type) => AddProjectReplyErrors, { nullable: true })
  errors?: AddProjectReplyErrors
}
