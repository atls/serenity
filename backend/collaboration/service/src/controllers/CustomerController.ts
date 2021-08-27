import { Controller, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common'
import { GrpcMethod }                                            from '@nestjs/microservices'

import {
  CompleteProjectCommand,
  CreateProjectCommand,
  CustomerService,
  PublishProjectCommand,
} from '@collaboration/application'
import { MapValidationErrorsInterceptor }                        from '@atls/nestjs-map-errors-interceptor'

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
