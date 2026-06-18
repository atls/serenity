import { Email } from '../model/index.js'

export class ResetPasswordComplete {
  static readonly NAME = 'identity/reset-password-complete'

  $name = ResetPasswordComplete.NAME

  $version = 0

  constructor(
    readonly userId: string,
    readonly email: Email
  ) {}
}
