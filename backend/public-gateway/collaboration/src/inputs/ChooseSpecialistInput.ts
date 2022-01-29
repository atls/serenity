import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class ChooseSpecialistInput {
  @Field((type) => ID)
  replyId: string
}
