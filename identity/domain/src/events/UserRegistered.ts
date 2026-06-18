import type { Credentials } from '../model/Credentials.js'
import type { Email }       from '../model/Email.js'

export class UserRegistered {
  static readonly NAME = 'identity/user-registered'

  $name = UserRegistered.NAME

  $version = 0

  constructor(
    readonly userId: string,
    readonly email: Email,
    readonly credentials: Credentials
  ) {}
}
