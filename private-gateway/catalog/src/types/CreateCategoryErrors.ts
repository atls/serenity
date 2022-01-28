import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class CreateCategoryErrors {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  groupId?: string
}
