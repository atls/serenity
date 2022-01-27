import { MapValidationErrorsInterceptor } from '@atls/nestjs-map-errors-interceptor'
import { Controller }                     from '@nestjs/common'
import { UseInterceptors }                from '@nestjs/common'
import { UsePipes }                       from '@nestjs/common'
import { ValidationPipe }                 from '@nestjs/common'
import { GrpcMethod }                     from '@nestjs/microservices'

import { CompleteProjectCommand }         from '@collaboration/application'
import { CreateProjectCommand }           from '@collaboration/application'
import { CustomerService }                from '@collaboration/application'
import { PublishProjectCommand }          from '@collaboration/application'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @GrpcMethod('CollaborationService', 'createProject')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createProject(request: CreateProjectCommand) {
    const result = await this.customerService.createProject(request)

    return {
      result,
    }
  }

  @GrpcMethod('CollaborationService', 'publishProject')
  @UsePipes(new ValidationPipe({ transform: true }))
  async publishProject(request: PublishProjectCommand) {
    const result = await this.customerService.publishProject(request)

    return {
      result,
    }
  }

  @GrpcMethod('CollaborationService', 'completeProject')
  @UsePipes(new ValidationPipe({ transform: true }))
  async completeProject(request: CompleteProjectCommand) {
    const result = await this.customerService.completeProject(request)

    return {
      result,
    }
  }
}
