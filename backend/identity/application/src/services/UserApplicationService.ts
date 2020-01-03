import uuid                                                      from 'uuid/v4'
import { Injectable }                                            from '@nestjs/common'

import { ContactInformation, Credentials, Phone, Profile, User } from '@identity/domain'
import { UserStoreRepository }                                   from '@identity/persistence'

import {
  AuthenticateUserCommand,
  ChangePasswordCommand,
  CreateProfileCommand,
  RegisterUserCommand,
  ResetPasswordCommand,
  UpdateProfileCommand,
} from '../commands'

@Injectable()
export class UserApplicationService {
  constructor(private readonly userRepository: UserStoreRepository) {}

  async register(command: RegisterUserCommand): Promise<any> {
    const user = await User.register(
      uuid(),
      new Phone(command.phone),
      new Credentials(command.password)
    )

    user.requestEmailVerification()

    await this.userRepository.save(user)

    return user
  }

  async authenticate(command: AuthenticateUserCommand): Promise<any> {
    const user = await this.userRepository.getByPhoneNumber(command.phone)

    if (user && (await user.verifyPassword(command.password))) {
      return user
    }

    return null
  }

  async resetPassword(command: ResetPasswordCommand): Promise<any> {
    const user = await this.userRepository.getByPhoneNumber(command.phone)

    user.requestResetPassword()

    await this.userRepository.save(user)

    return user
  }

  async changePassword(command: ChangePasswordCommand): Promise<any> {
    const user = await this.userRepository.getByResetPasswordToken(command.token)

    await user.completeResetPassword(command.password)

    await this.userRepository.save(user)

    return user
  }

  async createProfile(command: CreateProfileCommand): Promise<any> {
    const user = await this.userRepository.getById(command.id)

    user.createProfile(new Profile())

    await this.userRepository.save(user)

    return user
  }

  async updateProfile(command: UpdateProfileCommand): Promise<any> {
    const user = await this.userRepository.getById(command.id)

    user.changeProfileContactInformation(new ContactInformation(new Phone(command.phone)))

    await this.userRepository.save(user)

    return user.profile
  }
}
