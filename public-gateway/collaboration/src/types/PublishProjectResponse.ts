import { Field, ObjectType } from '@nestjs/graphql'

import { PublishProjectErrors } from './PublishProjectErrors'

@ObjectType()
export class PublishProjectResponse {
  // @ts-ignore
  @Field(type => require('./Project').Project, { nullable: true })
  result?: any

  @Field(type => PublishProjectErrors, { nullable: true })
  errors?: PublishProjectErrors
}
