import { Field, ObjectType } from 'type-graphql'

import { Address } from './Address'
import { ContactInformation } from './ContactInformation'
import { PersonalInformation } from './PersonalInformation'
import { Photo } from './Photo'

@ObjectType()
export class Profile {
  @Field()
  type: string

  @Field(type => Photo, { nullable: true })
  photo: Photo

  @Field(type => PersonalInformation)
  personalInformation: PersonalInformation

  @Field(type => ContactInformation, { nullable: true })
  contactInformation: ContactInformation

  @Field(type => Address, { nullable: true })
  address: Address

  @Field({ nullable: true })
  website: string
}
