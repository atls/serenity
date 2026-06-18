import { Email } from '../model/index.js'

export class EmailVerificationComplete {
  static readonly NAME = 'identity/email-verification-complete'

  $name = EmailVerificationComplete.NAME

  $version = 0

  constructor(
    readonly userId: string,
    readonly email: Email
  ) {}
}
