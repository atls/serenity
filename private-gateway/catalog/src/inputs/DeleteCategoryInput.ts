import { Field }     from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class DeleteCategoryInput {
  @Field()
  id: string
}
