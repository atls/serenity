import { ContactInformation } from './ContactInformation'
import { ProfileType }        from './ProfileType'

export class Profile {
  type: ProfileType

  contactInformation: ContactInformation

  changeContactInformation(contactInformation: ContactInformation) {
    this.contactInformation = contactInformation
  }
}
