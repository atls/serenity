import { Field }                  from '@nestjs/graphql'
import { ObjectType }             from '@nestjs/graphql'

import { ChooseSpecialistErrors } from './ChooseSpecialistErrors.js'

@ObjectType()
export class ChooseSpecialistResponse {
  // @ts-ignore
  @Field((type) => require('./Project.js').Project, { nullable: true })
  result?: any

  @Field((type) => ChooseSpecialistErrors, { nullable: true })
  errors?: ChooseSpecialistErrors
}
