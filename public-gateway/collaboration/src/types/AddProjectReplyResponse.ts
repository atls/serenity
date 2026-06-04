import { Field }                 from '@nestjs/graphql'
import { ObjectType }            from '@nestjs/graphql'

import { AddProjectReplyErrors } from './AddProjectReplyErrors'
import { Reply }                 from './Reply'

@ObjectType()
export class AddProjectReplyResponse {
  @Field((type) => Reply, { nullable: true })
  result?: Reply

  @Field((type) => AddProjectReplyErrors, { nullable: true })
  errors?: AddProjectReplyErrors
}
