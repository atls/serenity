import { Field, ObjectType } from 'type-graphql'

import { SpecialistMember } from './SpecialistMember'
import { UpdateSpecialistErrors } from './UpdateSpecialistErrors'

@ObjectType()
export class UpdateSpecialistResponse {
  @Field(type => SpecialistMember, { nullable: true })
  result?: SpecialistMember

  @Field(type => UpdateSpecialistErrors, { nullable: true })
  errors?: UpdateSpecialistErrors
}
