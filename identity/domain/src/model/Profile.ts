import { Address }             from './Address.js'
import { ContactInformation }  from './ContactInformation.js'
import { PersonalInformation } from './PersonalInformation.js'
import { Photo }               from './Photo.js'
import { ProfileType }         from './ProfileType.js'

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
