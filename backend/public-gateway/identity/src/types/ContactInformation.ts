import { Field, ObjectType } from 'type-graphql'

import { Phone } from './Phone'

@ObjectType()
export class ContactInformation {
  @Field(type => Phone, { nullable: true })
  phone: Phone
}
