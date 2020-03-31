import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

import { Email } from '../model'

export class ResetPasswordRequested extends Event {
  static readonly NAME = 'identity/reset-password-requested'

  $name = ResetPasswordRequested.NAME

  $version = 0

  constructor(readonly userId: Uuid, readonly email: Email, readonly resetToken: string) {
    super()
  }
}
