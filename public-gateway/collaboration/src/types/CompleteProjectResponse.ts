import { Field, ObjectType } from '@nestjs/graphql'

import { CompleteProjectErrors } from './CompleteProjectErrors'
import { Review } from './Review'

@ObjectType()
export class CompleteProjectResponse {
  // @ts-ignore
  @Field(type => Review, { nullable: true })
  result?: any

  @Field(type => CompleteProjectErrors, { nullable: true })
  errors?: CompleteProjectErrors
}
