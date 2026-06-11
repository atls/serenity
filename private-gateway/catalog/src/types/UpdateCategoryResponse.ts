import { Field }                from '@nestjs/graphql'
import { ObjectType }           from '@nestjs/graphql'

import { Category }             from './Category.js'
import { UpdateCategoryErrors } from './UpdateCategoryErrors.js'

@ObjectType()
export class UpdateCategoryResponse {
  @Field((type) => Category, { nullable: true })
  result?: Category

  @Field((type) => UpdateCategoryErrors, { nullable: true })
  errors?: UpdateCategoryErrors
}
