import { Field }     from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class UpdateCategoryInput {
  @Field()
  id: string

  @Field()
  name: string
}
