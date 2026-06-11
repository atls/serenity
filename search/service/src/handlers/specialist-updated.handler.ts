import { SpecialistUpdated }     from '@collaboration/domain'
import { HandlesMessage }        from '@monstrs/nestjs-bus'
import { Handler }               from '@node-ts/bus-core'

import { SpecialistDataService } from '../services/index.js'

@HandlesMessage(SpecialistUpdated)
export class SpecialistUpdatedHandler implements Handler<SpecialistUpdated> {
  constructor(private readonly specialistDataService: SpecialistDataService) {}

  async handle(event: SpecialistUpdated): Promise<void> {
    await this.specialistDataService.handle(event.specialistId)
  }
}
