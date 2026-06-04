import { Controller }               from '@nestjs/common'

import { SpecialistQueriesService } from '@collaboration/application'
import { GrpcMethod }               from '@nestjs/microservices'

@Controller()
export class SpecialistQueriesController {
  constructor(private readonly specialistService: SpecialistQueriesService) {}

  @GrpcMethod('CollaborationService', 'getSpecialists')
  getSpecialists({ filters, pager }) {
    return this.specialistService.findAll(pager, filters)
  }
}
