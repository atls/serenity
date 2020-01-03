import { MapValidationErrorsInterceptor }                        from '@monstrs/nestjs-map-errors-interceptor'
import { Controller, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common'
import { GrpcMethod }                                            from '@nestjs/microservices'

import {
  AuthenticateUserCommand,
  ChangePasswordCommand,
  CreateProfileCommand,
  RegisterUserCommand,
  ResetPasswordCommand,
  UpdateProfileCommand,
  UserApplicationService,
  VerifyEmailCommand,
} from '@identity/application'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class IdentityController {
  constructor(private readonly userApplicationService: UserApplicationService) {}

  @GrpcMethod('IdentityService', 'register')
  @UsePipes(new ValidationPipe({ transform: true }))
  async register(request: RegisterUserCommand) {
    const result = await this.userApplicationService.register(request)

    return {
      result,
    }
  }

  @GrpcMethod('IdentityService', 'verifyEmail')
  @UsePipes(new ValidationPipe({ transform: true }))
  async verifyEmail(request: VerifyEmailCommand) {
    const result = await this.userApplicationService.verifyEmail(request)

    return {
      result,
    }
  }

  @GrpcMethod('IdentityService', 'authenticate')
  @UsePipes(new ValidationPipe({ transform: true }))
  async authenticate(request: AuthenticateUserCommand) {
    const result = await this.userApplicationService.authenticate(request)

    if (!result) {
      return {
        errors: {
          phone: 'Телефон не найден',
        },
      }
    }

    return {
      result,
    }
  }

  @GrpcMethod('IdentityService', 'resetPassword')
  @UsePipes(new ValidationPipe({ transform: true }))
  async resetPassword(request: ResetPasswordCommand) {
    await this.userApplicationService.resetPassword(request)

    return {
      result: null,
    }
  }

  @GrpcMethod('IdentityService', 'changePassword')
  @UsePipes(new ValidationPipe({ transform: true }))
  async changePassword(request: ChangePasswordCommand) {
    const result = await this.userApplicationService.changePassword(request)

    return {
      result,
    }
  }

  @GrpcMethod('IdentityService', 'createProfile')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createProfile(request: CreateProfileCommand) {
    const result = await this.userApplicationService.createProfile(request)

    return {
      result,
    }
  }

  @GrpcMethod('IdentityService', 'updateProfile')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateProfile(request: UpdateProfileCommand) {
    const result = await this.userApplicationService.updateProfile(request)

    return {
      result,
    }
  }
}
