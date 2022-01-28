import { Field, ObjectType } from 'type-graphql'

import { Category } from './Category'
import { UpdateCategoryErrors } from './UpdateCategoryErrors'

@ObjectType()
export class UpdateCategoryResponse {
  @Field(type => Category, { nullable: true })
  result?: Category

  @Field(type => UpdateCategoryErrors, { nullable: true })
  errors?: UpdateCategoryErrors
}
