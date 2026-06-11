import { Field }               from '@nestjs/graphql'
import { ObjectType }          from '@nestjs/graphql'

import { CreateProjectErrors } from './CreateProjectErrors.js'
import { Project }             from './Project.js'

@ObjectType()
export class CreateProjectResponse {
  @Field((type) => Project, { nullable: true })
  result?: Project

  @Field((type) => CreateProjectErrors, { nullable: true })
  errors?: CreateProjectErrors
}
