import { Column }               from 'typeorm'

import { Email as EmailEntity } from '@identity/domain'

export class Email extends EmailEntity {
  @Column({ unique: true })
  address: string

  @Column({
    default: false,
  })
  verified: boolean

  @Column({ nullable: true })
  verificationToken: string
}
