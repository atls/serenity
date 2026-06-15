import { Field }                  from '@nestjs/graphql'
import { ObjectType }             from '@nestjs/graphql'

import { ChooseSpecialistErrors } from './ChooseSpecialistErrors.js'
import { Project }                from './Project.js'

@ObjectType()
export class ChooseSpecialistResponse {
  @Field((type) => Project, { nullable: true })
  result?: Project

  @Field((type) => ChooseSpecialistErrors, { nullable: true })
  errors?: ChooseSpecialistErrors
}
