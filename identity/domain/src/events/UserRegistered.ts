import type { Credentials } from '../model/Credentials'
import type { Email }       from '../model/Email'

import { Event }            from '@node-ts/bus-messages'
import { Uuid }             from '@node-ts/ddd-types'

export class UserRegistered extends Event {
  static readonly NAME = 'identity/user-registered'

  $name = UserRegistered.NAME

  $version = 0

  constructor(
    readonly userId: Uuid,
    readonly email: Email,
    readonly credentials: Credentials
  ) {
    super()
  }
}
