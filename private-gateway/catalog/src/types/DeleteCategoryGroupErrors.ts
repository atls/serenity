import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class DeleteCategoryGroupErrors {
  @Field({ nullable: true })
  id?: string
}
