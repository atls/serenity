import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ChooseSpecialistErrors {
  @Field({ nullable: true })
  replyId?: string
}
