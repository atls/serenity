import { MapValidationErrorsInterceptor } from '@atls/nestjs-map-errors-interceptor'
import { Controller }                     from '@nestjs/common'
import { UseInterceptors }                from '@nestjs/common'
import { UsePipes }                       from '@nestjs/common'
import { ValidationPipe }                 from '@nestjs/common'
import { GrpcMethod }                     from '@nestjs/microservices'

import { ChangeAccountTypeCommand }       from '@collaboration/application'
import { SpecialistService }              from '@collaboration/application'
import { UpdateSpecialistCommand }        from '@collaboration/application'

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
