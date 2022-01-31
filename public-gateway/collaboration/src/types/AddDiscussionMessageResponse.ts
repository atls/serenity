import { Field, ObjectType } from '@nestjs/graphql'

import { AddDiscussionMessageErrors } from './AddDiscussionMessageErrors'
import { Message } from './Message'

@ObjectType()
export class AddDiscussionMessageResponse {
  @Field(type => Message, { nullable: true })
  result?: Message

  @Field(type => AddDiscussionMessageErrors, { nullable: true })
  errors?: AddDiscussionMessageErrors
}
