import { Field }                from '@nestjs/graphql'
import { ObjectType }           from '@nestjs/graphql'

import { DeleteCategoryErrors } from './DeleteCategoryErrors.js'

@ObjectType()
export class DeleteCategoryResponse {
  @Field((type) => DeleteCategoryErrors, { nullable: true })
  errors?: DeleteCategoryErrors
}
