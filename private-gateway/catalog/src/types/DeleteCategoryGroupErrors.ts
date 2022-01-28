import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class DeleteCategoryGroupErrors {
  @Field({ nullable: true })
  id?: string
}
