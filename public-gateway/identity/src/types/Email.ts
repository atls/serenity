import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Email {
  @Field()
  address: string

  @Field()
  verified: boolean
}
