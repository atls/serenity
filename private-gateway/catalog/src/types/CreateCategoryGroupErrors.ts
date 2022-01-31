import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CreateCategoryGroupErrors {
  @Field({ nullable: true })
  name?: string
}
