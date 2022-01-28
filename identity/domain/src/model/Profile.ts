import { Address }             from './Address'
import { ContactInformation }  from './ContactInformation'
import { PersonalInformation } from './PersonalInformation'
import { Photo }               from './Photo'
import { ProfileType }         from './ProfileType'

export class Profile {
  type: ProfileType

  photo: Photo

  personalInformation: PersonalInformation

  contactInformation: ContactInformation

  address: Address

  website: string

  constructor(type: ProfileType, personalInformation: PersonalInformation) {
    this.type = type
    this.personalInformation = personalInformation
  }

  changePhoto(photo: Photo) {
    this.photo = photo
  }

  changePersonalInformation(personalInformation: PersonalInformation) {
    this.personalInformation = personalInformation
  }

  changeContactInformation(contactInformation: ContactInformation) {
    this.contactInformation = contactInformation
  }

  changeAddress(address: Address) {
    this.address = address
  }

  changeWebsite(website: string) {
    this.website = website
  }
}
