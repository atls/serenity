import { Controller, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common'
import { GrpcMethod }                                            from '@nestjs/microservices'

import {
  ChangeAccountTypeCommand,
  SpecialistService,
  UpdateSpecialistCommand,
} from '@collaboration/application'
import { MapValidationErrorsInterceptor }                        from '@atls/nestjs-map-errors-interceptor'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class SpecialistController {
  constructor(private readonly specialistService: SpecialistService) {}

  @GrpcMethod('CollaborationService', 'updateSpecialist')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateSpecialist(request: UpdateSpecialistCommand) {
    const result = await this.specialistService.update(request)

    return {
      result,
    }
  }

  @GrpcMethod('CollaborationService', 'changeAccountType')
  @UsePipes(new ValidationPipe({ transform: true }))
  async changeAccountType(request: ChangeAccountTypeCommand) {
    const result = await this.specialistService.changeAccountType(request)

    return {
      result,
    }
  }
}
