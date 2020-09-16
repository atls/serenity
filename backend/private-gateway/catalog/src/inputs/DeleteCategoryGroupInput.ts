import { Field, InputType } from 'type-graphql'

@InputType()
export class DeleteCategoryGroupInput {
  @Field()
  id: string
}
