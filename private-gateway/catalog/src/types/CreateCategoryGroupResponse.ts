import { Field }                     from '@nestjs/graphql'
import { ObjectType }                from '@nestjs/graphql'

import { CategoryGroup }             from './CategoryGroup.js'
import { CreateCategoryGroupErrors } from './CreateCategoryGroupErrors.js'

@ObjectType()
export class CreateCategoryGroupResponse {
  @Field((type) => CategoryGroup, { nullable: true })
  result?: CategoryGroup

  @Field((type) => CreateCategoryGroupErrors, { nullable: true })
  errors?: CreateCategoryGroupErrors
}
