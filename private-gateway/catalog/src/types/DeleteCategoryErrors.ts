import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class DeleteCategoryErrors {
  @Field({ nullable: true })
  id?: string
}
