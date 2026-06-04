import { Field }                   from '@nestjs/graphql'
import { ObjectType }              from '@nestjs/graphql'

import { ChangeAccountTypeErrors } from './ChangeAccountTypeErrors'
import { SpecialistMember }        from './SpecialistMember'

@ObjectType()
export class ChangeAccountTypeResponse {
  @Field((type) => SpecialistMember, { nullable: true })
  result?: SpecialistMember

  @Field((type) => ChangeAccountTypeErrors, { nullable: true })
  errors?: ChangeAccountTypeErrors
}
