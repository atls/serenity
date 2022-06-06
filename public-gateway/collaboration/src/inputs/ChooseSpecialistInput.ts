import { Field }     from '@nestjs/graphql'
import { ID }        from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ChooseSpecialistInput {
  @Field((type) => ID)
  replyId: string
}
