import { Column }                                           from 'typeorm'

import { PersonalInformation as PersonalInformationEntity } from '@identity/domain'

export class PersonalInformation extends PersonalInformationEntity {
  @Column({ nullable: true })
  firstName: string

  @Column({ nullable: true })
  lastName: string
}
