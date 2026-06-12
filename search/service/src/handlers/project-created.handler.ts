import { Controller }         from '@nestjs/common'
import { EventPattern }       from '@nestjs/microservices'

import { ProjectCreated }     from '@collaboration/domain'

import { ProjectDataService } from '../services/index.js'

@Controller()
export class ProjectCreatedHandler {
  constructor(private readonly projectDataService: ProjectDataService) {}

  @EventPattern(ProjectCreated.NAME)
  async handle(event: ProjectCreated): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
