import { Field, ObjectType } from 'type-graphql'

import { CategoryGroup } from './CategoryGroup'
import { CreateCategoryGroupErrors } from './CreateCategoryGroupErrors'

@ObjectType()
export class CreateCategoryGroupResponse {
  @Field(type => CategoryGroup, { nullable: true })
  result?: CategoryGroup

  @Field(type => CreateCategoryGroupErrors, { nullable: true })
  errors?: CreateCategoryGroupErrors
}
