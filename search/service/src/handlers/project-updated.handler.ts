import { Controller }         from '@nestjs/common'
import { EventPattern }       from '@nestjs/microservices'

import { ProjectUpdated }     from '@collaboration/domain'

import { ProjectDataService } from '../services/index.js'

@Controller()
export class ProjectUpdatedHandler {
  constructor(private readonly projectDataService: ProjectDataService) {}

  @EventPattern(ProjectUpdated.NAME)
  async handle(event: ProjectUpdated): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
