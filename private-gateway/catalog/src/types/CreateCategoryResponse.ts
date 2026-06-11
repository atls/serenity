import { Field }                from '@nestjs/graphql'
import { ObjectType }           from '@nestjs/graphql'

import { Category }             from './Category.js'
import { CreateCategoryErrors } from './CreateCategoryErrors.js'

@ObjectType()
export class CreateCategoryResponse {
  @Field((type) => Category, { nullable: true })
  result?: Category

  @Field((type) => CreateCategoryErrors, { nullable: true })
  errors?: CreateCategoryErrors
}
