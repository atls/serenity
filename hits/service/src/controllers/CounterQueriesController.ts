import { Controller }     from '@nestjs/common'

import { CounterService } from '@hits/queries'
import { GrpcMethod }     from '@nestjs/microservices'

@Controller()
export class CounterQueriesController {
  constructor(private readonly counterService: CounterService) {}

  @GrpcMethod('HitsService', 'getCounters')
  getCounters({ filters }) {
    return this.counterService.findAll(filters)
  }
}
