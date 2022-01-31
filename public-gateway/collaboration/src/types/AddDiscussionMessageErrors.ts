import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AddDiscussionMessageErrors {
  @Field({ nullable: true })
  recipientId?: string

  @Field({ nullable: true })
  message?: string
}
