import { Field }                      from '@nestjs/graphql'
import { ObjectType }                 from '@nestjs/graphql'

import { AddDiscussionMessageErrors } from './AddDiscussionMessageErrors.js'
import { Message }                    from './Message.js'

@ObjectType()
export class AddDiscussionMessageResponse {
  @Field((type) => Message, { nullable: true })
  result?: Message

  @Field((type) => AddDiscussionMessageErrors, { nullable: true })
  errors?: AddDiscussionMessageErrors
}
