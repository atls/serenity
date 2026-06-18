import { Email } from '../model/index.js'

export class EmailVerificationRequested {
  static readonly NAME = 'identity/email-verification-requested'

  $name = EmailVerificationRequested.NAME

  $version = 0

  constructor(
    readonly userId: string,
    readonly email: Email
  ) {}
}
