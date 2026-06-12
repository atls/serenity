import { Controller }         from '@nestjs/common'
import { EventPattern }       from '@nestjs/microservices'

import { ProjectCompleted }   from '@collaboration/domain'

import { ProjectDataService } from '../services/index.js'

@Controller()
export class ProjectCompletedHandler {
  constructor(private readonly projectDataService: ProjectDataService) {}

  @EventPattern(ProjectCompleted.NAME)
  async handle(event: ProjectCompleted): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
