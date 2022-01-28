import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class AddDiscussionMessageErrors {
  @Field({ nullable: true })
  recipientId?: string

  @Field({ nullable: true })
  message?: string
}
