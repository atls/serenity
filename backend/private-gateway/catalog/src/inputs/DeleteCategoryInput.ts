import { Field, InputType } from 'type-graphql'

@InputType()
export class DeleteCategoryInput {
  @Field()
  id: string
}
