import { Field }                 from '@nestjs/graphql'
import { ObjectType }            from '@nestjs/graphql'

import { AddReplyMessageErrors } from './AddReplyMessageErrors.js'
import { Message }               from './Message.js'

@ObjectType()
export class AddReplyMessageResponse {
  @Field((type) => Message, { nullable: true })
  result?: Message

  @Field((type) => AddReplyMessageErrors, { nullable: true })
  errors?: AddReplyMessageErrors
}
