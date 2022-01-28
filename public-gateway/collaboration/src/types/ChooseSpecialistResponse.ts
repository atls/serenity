import { Field, ObjectType } from 'type-graphql'

import { ChooseSpecialistErrors } from './ChooseSpecialistErrors'

@ObjectType()
export class ChooseSpecialistResponse {
  // @ts-ignore
  @Field(type => require('./Project').Project, { nullable: true })
  result?: any

  @Field(type => ChooseSpecialistErrors, { nullable: true })
  errors?: ChooseSpecialistErrors
}
