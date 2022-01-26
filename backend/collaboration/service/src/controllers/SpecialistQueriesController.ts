import { Controller }               from '@nestjs/common'
import { GrpcMethod }               from '@nestjs/microservices'

import { SpecialistQueriesService } from '@collaboration/application'
import { FindAllResponse }          from '@collaboration/application'

@Controller()
export class SpecialistQueriesController {
  constructor(private readonly specialistService: SpecialistQueriesService) {}

  @GrpcMethod('CollaborationService', 'getSpecialists')
  getSpecialists({ filters, pager }) {
    return this.specialistService.findAll(pager, filters)
  }
}
