import { Field, ObjectType } from '@nestjs/graphql'

import { DeleteCategoryGroupErrors } from './DeleteCategoryGroupErrors'

@ObjectType()
export class DeleteCategoryGroupResponse {
  @Field(type => DeleteCategoryGroupErrors, { nullable: true })
  errors?: DeleteCategoryGroupErrors
}
