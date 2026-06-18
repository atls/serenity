import type { Email } from '../model/Email.js'

export class ResetPasswordRequested {
  static readonly NAME = 'identity/reset-password-requested'

  $name = ResetPasswordRequested.NAME

  $version = 0

  constructor(
    readonly userId: string,
    readonly email: Email,
    readonly resetToken: string
  ) {}
}
