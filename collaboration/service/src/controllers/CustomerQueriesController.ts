import { Controller }             from '@nestjs/common'

import { CustomerQueriesService } from '@collaboration/application'
import { GrpcMethod }             from '@nestjs/microservices'

@Controller()
export class CustomerQueriesController {
  constructor(private readonly customerService: CustomerQueriesService) {}

  @GrpcMethod('CollaborationService', 'getCustomers')
  getCustomers({ filters }) {
    return this.customerService.findAll(filters)
  }
}
