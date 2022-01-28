import { Field, ObjectType } from 'type-graphql'

import { Project } from './Project'
import { UpdateProjectErrors } from './UpdateProjectErrors'

@ObjectType()
export class UpdateProjectResponse {
  @Field(type => Project, { nullable: true })
  result?: Project

  @Field(type => UpdateProjectErrors, { nullable: true })
  errors?: UpdateProjectErrors
}
