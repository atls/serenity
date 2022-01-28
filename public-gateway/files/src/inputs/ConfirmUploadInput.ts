import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class ConfirmUploadInput {
  @Field((type) => ID)
  id: string
}
