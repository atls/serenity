import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateCategoryGroupInput {
  @Field()
  name: string
}
