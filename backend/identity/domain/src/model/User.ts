import { AggregateRoot }                 from '@node-ts/ddd'
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
import { AggregateRootProperties, Uuid } from '@node-ts/ddd-types'

import {
  EmailVerificationComplete,
  EmailVerificationRequested,
  ProfileCreated,
  ResetPasswordComplete,
  ResetPasswordRequested,
  UserRegistered,
} from '../events'
import { ContactInformation }            from './ContactInformation'
import { Credentials }                   from './Credentials'
import { Email }                         from './Email'
import { Profile }                       from './Profile'

export interface UserProperties extends AggregateRootProperties {
  email: Email
  credentials: Credentials
}

export class User extends AggregateRoot implements UserProperties {
  email: Email

  credentials: Credentials

  profile: Profile

  static async register(id: Uuid, email: Email, credentials: Credentials): Promise<User> {
    const user = new User(id)

    await credentials.encryptPassword()

    const userRegistered = new UserRegistered(id, email, credentials)

    user.when(userRegistered)

    return user
  }

  requestEmailVerification() {
    this.email.generateVerificationToken()

    this.when(new EmailVerificationRequested(this.id, this.email))
  }

  completeEmailVerification() {
    this.email.verify()

    this.when(new EmailVerificationComplete(this.id, this.email))
  }

  requestResetPassword() {
    this.credentials.generateResetToken()

    this.when(new ResetPasswordRequested(this.id, this.email, this.credentials.resetToken))
  }

  async completeResetPassword(password) {
    await this.credentials.changePassword(password)
    this.credentials.clearResetToken()

    this.when(new ResetPasswordComplete(this.id, this.email))
  }

  public verifyPassword(password) {
    return this.credentials.verifyPassword(password)
  }

  public createProfile(profile: Profile) {
    if (!(this.profile && this.profile.type)) {
      this.when(new ProfileCreated(this.id, profile))
    }
  }

  public changeProfileContactInformation(contactInformation: ContactInformation) {
    this.profile.changeContactInformation(contactInformation)
  }

  protected whenUserRegistered(event: UserRegistered): void {
    this.email = event.email
    this.credentials = event.credentials
  }

  protected whenEmailVerificationRequested(event: EmailVerificationRequested): void {}

  protected whenEmailVerificationComplete(event: EmailVerificationComplete): void {}

  protected whenResetPasswordRequested(event: ResetPasswordRequested): void {}

  protected whenResetPasswordComplete(event: ResetPasswordComplete): void {}

  protected whenProfileCreated(event: ProfileCreated): void {
    this.profile = event.profile
  }
}
