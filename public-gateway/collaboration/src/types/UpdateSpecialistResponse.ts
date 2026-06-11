import { Field }                  from '@nestjs/graphql'
import { ObjectType }             from '@nestjs/graphql'

import { SpecialistMember }       from './SpecialistMember.js'
import { UpdateSpecialistErrors } from './UpdateSpecialistErrors.js'

@ObjectType()
export class UpdateSpecialistResponse {
  @Field((type) => SpecialistMember, { nullable: true })
  result?: SpecialistMember

  @Field((type) => UpdateSpecialistErrors, { nullable: true })
  errors?: UpdateSpecialistErrors
}
