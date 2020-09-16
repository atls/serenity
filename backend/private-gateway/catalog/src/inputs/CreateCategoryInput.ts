import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateCategoryInput {
  @Field()
  name: string

  @Field()
  groupId: string
}
