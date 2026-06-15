import { Field }                from '@nestjs/graphql'
import { ObjectType }           from '@nestjs/graphql'

import { Project }              from './Project.js'
import { PublishProjectErrors } from './PublishProjectErrors.js'

@ObjectType()
export class PublishProjectResponse {
  @Field((type) => Project, { nullable: true })
  result?: Project

  @Field((type) => PublishProjectErrors, { nullable: true })
  errors?: PublishProjectErrors
}
