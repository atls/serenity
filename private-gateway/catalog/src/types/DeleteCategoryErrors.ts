import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class DeleteCategoryErrors {
  @Field({ nullable: true })
  id?: string
}
