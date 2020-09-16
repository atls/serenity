import { Field, InputType } from 'type-graphql'

@InputType()
export class UpdateCategoryInput {
  @Field()
  id: string

  @Field()
  name: string
}
