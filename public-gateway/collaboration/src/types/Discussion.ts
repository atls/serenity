import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { User }       from '@public-gateway/identity'

import { Message }    from './Message.js'

@ObjectType()
export class Discussion {
  @Field()
  id: string

  @Field((type) => [Message])
  messages: Message[]

  @Field((type) => User)
  recipient: User
}
