import { Field }     from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class CreateCategoryGroupInput {
  @Field()
  name: string
}
