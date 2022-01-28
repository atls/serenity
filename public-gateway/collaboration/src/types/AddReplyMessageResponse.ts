import { Field, ObjectType } from 'type-graphql'

import { AddReplyMessageErrors } from './AddReplyMessageErrors'
import { Message } from './Message'

@ObjectType()
export class AddReplyMessageResponse {
  @Field(type => Message, { nullable: true })
  result?: Message

  @Field(type => AddReplyMessageErrors, { nullable: true })
  errors?: AddReplyMessageErrors
}
