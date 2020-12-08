import { Controller }     from '@nestjs/common'
import { GrpcMethod }     from '@nestjs/microservices'

import { CounterService } from '@hits/queries'

@Controller()
export class CounterQueriesController {
  constructor(private readonly counterService: CounterService) {}

  @GrpcMethod('HitsService', 'getCounters')
  getCounters({ filters }) {
    return this.counterService.findAll(filters)
  }
}
