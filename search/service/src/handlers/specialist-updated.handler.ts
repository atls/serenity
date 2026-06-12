import { Controller }            from '@nestjs/common'
import { EventPattern }          from '@nestjs/microservices'

import { SpecialistUpdated }     from '@collaboration/domain'

import { SpecialistDataService } from '../services/index.js'

@Controller()
export class SpecialistUpdatedHandler {
  constructor(private readonly specialistDataService: SpecialistDataService) {}

  @EventPattern(SpecialistUpdated.NAME)
  async handle(event: SpecialistUpdated): Promise<void> {
    await this.specialistDataService.handle(event.specialistId)
  }
}
