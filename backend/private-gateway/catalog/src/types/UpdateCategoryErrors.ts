import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class UpdateCategoryErrors {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  name?: string
}
