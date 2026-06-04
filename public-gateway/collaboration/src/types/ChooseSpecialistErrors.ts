import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ChooseSpecialistErrors {
  @Field({ nullable: true })
  replyId?: string
}
