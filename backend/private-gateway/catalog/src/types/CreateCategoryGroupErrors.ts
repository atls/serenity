import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class CreateCategoryGroupErrors {
  @Field({ nullable: true })
  name?: string
}
