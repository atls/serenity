import { MapValidationErrorsInterceptor } from '@atlantis-lab/nestjs-map-errors-interceptor'
import { Controller }                     from '@nestjs/common'
import { UseInterceptors }                from '@nestjs/common'
import { UsePipes }                       from '@nestjs/common'
import { ValidationPipe }                 from '@nestjs/common'
import { GrpcMethod }                     from '@nestjs/microservices'

import { AuthenticateUserCommand }        from '@identity/application'
import { ChangePasswordCommand }          from '@identity/application'
import { CreateProfileCommand }           from '@identity/application'
import { RegisterUserCommand }            from '@identity/application'
import { ResetPasswordCommand }           from '@identity/application'
import { UpdateProfileCommand }           from '@identity/application'
import { UserApplicationService }         from '@identity/application'
import { VerifyEmailCommand }             from '@identity/application'

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
          email: 'Email не найден',
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
