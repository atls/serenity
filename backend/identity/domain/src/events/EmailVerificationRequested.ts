import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

import { Email } from '../model'

export class EmailVerificationRequested extends Event {
  static readonly NAME = 'identity/email-verification-requested'

  $name = EmailVerificationRequested.NAME

  $version = 0

  constructor(readonly userId: Uuid, readonly email: Email) {
    super()
  }
}
