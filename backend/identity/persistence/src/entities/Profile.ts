import { Column }                                from 'typeorm'

import { Profile as ProfileEntity, ProfileType } from '@identity/domain'

import { ContactInformation }                    from './ContactInformation'

export class Profile extends ProfileEntity {
  @Column('enum', {
    enum: ProfileType,
    nullable: true,
  })
  type: ProfileType

  @Column(type => ContactInformation)
  contactInformation: ContactInformation

  @Column({ nullable: true })
  website: string
}
