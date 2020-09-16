import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class UpdateCategoryGroupErrors {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  name?: string
}
