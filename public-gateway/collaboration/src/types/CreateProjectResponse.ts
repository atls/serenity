import { Field, ObjectType } from 'type-graphql'

import { CreateProjectErrors } from './CreateProjectErrors'
import { Project } from './Project'

@ObjectType()
export class CreateProjectResponse {
  @Field(type => Project, { nullable: true })
  result?: Project

  @Field(type => CreateProjectErrors, { nullable: true })
  errors?: CreateProjectErrors
}
