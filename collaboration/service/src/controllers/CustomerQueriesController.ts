import { Controller }             from '@nestjs/common'
import { GrpcMethod }             from '@nestjs/microservices'

import { CustomerQueriesService } from '@collaboration/application'

@Controller()
export class CustomerQueriesController {
  constructor(private readonly customerService: CustomerQueriesService) {}

  @GrpcMethod('CollaborationService', 'getCustomers')
  getCustomers({ filters }) {
    return this.customerService.findAll(filters)
  }
}
