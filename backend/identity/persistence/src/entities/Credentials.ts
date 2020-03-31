import { Column }                           from 'typeorm'

import { Credentials as CredentialsEntity } from '@identity/domain'

export class Credentials extends CredentialsEntity {
  @Column()
  password: string

  @Column({ nullable: true })
  resetToken: string
}
