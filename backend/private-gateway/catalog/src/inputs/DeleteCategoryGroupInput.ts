import { Field }     from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class DeleteCategoryGroupInput {
  @Field()
  id: string
}
