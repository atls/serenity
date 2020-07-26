import { Uuid }               from '@node-ts/ddd-types'

import { Event }              from '@node-ts/bus-messages'

import { Credentials, Email } from '../model'

export class UserRegistered extends Event {
  static readonly NAME = 'identity/user-registered'

  $name = UserRegistered.NAME

  $version = 0

  constructor(readonly userId: Uuid, readonly email: Email, readonly credentials: Credentials) {
    super()
  }
}
