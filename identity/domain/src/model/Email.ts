import uuid from 'uuid'

export class Email {
  address: string

  verified: boolean = false

  verificationToken: string | null

  constructor(address: string) {
    this.address = address
  }

  generateVerificationToken() {
    this.verificationToken = uuid()
  }

  verify() {
    this.verificationToken = null
    this.verified = true
  }
}
