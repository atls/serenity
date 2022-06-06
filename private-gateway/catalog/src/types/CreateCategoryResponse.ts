import { Field, ObjectType } from '@nestjs/graphql'

import { Category } from './Category'
import { CreateCategoryErrors } from './CreateCategoryErrors'

@ObjectType()
export class CreateCategoryResponse {
  @Field(type => Category, { nullable: true })
  result?: Category

  @Field(type => CreateCategoryErrors, { nullable: true })
  errors?: CreateCategoryErrors
}
