import { Column }                   from 'typeorm'

import { Address as AddressEntity } from '@identity/domain'

export class Address extends AddressEntity {
  @Column({ nullable: true })
  formatted: string
}
