import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ChooseSpecialistErrors {
  @Field({ nullable: true })
  replyId?: string
}
