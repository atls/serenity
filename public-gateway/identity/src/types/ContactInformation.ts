import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

import { Phone }      from './Phone'

@ObjectType()
export class ContactInformation {
  @Field((type) => Phone, { nullable: true })
  phone: Phone
}
