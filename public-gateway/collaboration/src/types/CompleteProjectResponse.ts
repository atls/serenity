import { Field }                 from '@nestjs/graphql'
import { ObjectType }            from '@nestjs/graphql'

import { CompleteProjectErrors } from './CompleteProjectErrors.js'
import { Review }                from './Review.js'

@ObjectType()
export class CompleteProjectResponse {
  // @ts-ignore
  @Field((type) => Review, { nullable: true })
  result?: any

  @Field((type) => CompleteProjectErrors, { nullable: true })
  errors?: CompleteProjectErrors
}
