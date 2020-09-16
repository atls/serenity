import { Field, ObjectType } from 'type-graphql'

import { DeleteCategoryGroupErrors } from './DeleteCategoryGroupErrors'

@ObjectType()
export class DeleteCategoryGroupResponse {
  @Field(type => DeleteCategoryGroupErrors, { nullable: true })
  errors?: DeleteCategoryGroupErrors
}
