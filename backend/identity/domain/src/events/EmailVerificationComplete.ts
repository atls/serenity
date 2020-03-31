import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

import { Email } from '../model'

export class EmailVerificationComplete extends Event {
  static readonly NAME = 'identity/email-verification-complete'

  $name = EmailVerificationComplete.NAME

  $version = 0

  constructor(readonly userId: Uuid, readonly email: Email) {
    super()
  }
}
