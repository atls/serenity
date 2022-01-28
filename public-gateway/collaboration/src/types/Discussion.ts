import { User } from '@public-gateway/identity'
import { Field, ObjectType } from 'type-graphql'

import { Message } from './Message'

@ObjectType()
export class Discussion {
  @Field()
  id: string

  @Field(type => [Message])
  messages: Message[]

  @Field(type => User)
  recipient: User
}
