import { Column }               from 'typeorm'

import { Phone as PhoneEntity } from '@identity/domain'

export class Phone extends PhoneEntity {
  @Column({ nullable: true })
  number: string
}
