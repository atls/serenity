import { Field }                     from '@nestjs/graphql'
import { ObjectType }                from '@nestjs/graphql'

import { CategoryGroup }             from './CategoryGroup.js'
import { UpdateCategoryGroupErrors } from './UpdateCategoryGroupErrors.js'

@ObjectType()
export class UpdateCategoryGroupResponse {
  @Field((type) => CategoryGroup, { nullable: true })
  result?: CategoryGroup

  @Field((type) => UpdateCategoryGroupErrors, { nullable: true })
  errors?: UpdateCategoryGroupErrors
}
