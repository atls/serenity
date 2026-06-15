import argon2 from 'argon2'
import uuid   from 'uuid'

export class Credentials {
  password: string

  resetToken: string | null

  constructor(password: string) {
    this.password = password
  }

  async encryptPassword() {
    this.password = await argon2.hash(this.password)
  }

  async changePassword(password: string) {
    this.password = await argon2.hash(password)
  }

  verifyPassword(password: string) {
    return argon2.verify(this.password, password)
  }

  generateResetToken() {
    this.resetToken = uuid()
  }

  clearResetToken() {
    this.resetToken = null
  }
}
