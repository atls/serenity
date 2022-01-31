import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Email {
  @Field()
  address: string

  @Field()
  verified: boolean
}
