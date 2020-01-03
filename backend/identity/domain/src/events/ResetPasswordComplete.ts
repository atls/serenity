import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

import { Phone } from '../model'

export class ResetPasswordComplete extends Event {
  static readonly NAME = 'identity/reset-password-complete'

  $name = ResetPasswordComplete.NAME

  $version = 0

  constructor(readonly userId: Uuid, readonly phone: Phone) {
    super()
  }
}
