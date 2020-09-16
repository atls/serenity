import { Field, InputType } from 'type-graphql'

@InputType()
export class UpdateCategoryGroupInput {
  @Field()
  id: string

  @Field()
  name: string
}
