import { Field, ObjectType } from 'type-graphql'

import { Address } from './Address'
import { ContactInformation } from './ContactInformation'
import { PersonalInformation } from './PersonalInformation'

@ObjectType()
export class Profile {
  @Field()
  type: string

  @Field(type => PersonalInformation)
  personalInformation: PersonalInformation

  @Field(type => ContactInformation, { nullable: true })
  contactInformation: ContactInformation

  @Field(type => Address, { nullable: true })
  address: Address

  @Field({ nullable: true })
  website: string
}
