import { Controller }         from '@nestjs/common'
import { EventPattern }       from '@nestjs/microservices'

import { ProjectPublished }   from '@collaboration/domain'

import { ProjectDataService } from '../services/index.js'

@Controller()
export class ProjectPublishedHandler {
  constructor(private readonly projectDataService: ProjectDataService) {}

  @EventPattern(ProjectPublished.NAME)
  async handle(event: ProjectPublished): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
