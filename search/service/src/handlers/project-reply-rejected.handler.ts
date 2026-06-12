import { Controller }           from '@nestjs/common'
import { EventPattern }         from '@nestjs/microservices'

import { ProjectReplyRejected } from '@collaboration/domain'

import { ProjectDataService }   from '../services/index.js'

@Controller()
export class ProjectReplyRejectedHandler {
  constructor(private readonly projectDataService: ProjectDataService) {}

  @EventPattern(ProjectReplyRejected.NAME)
  async handle(event: ProjectReplyRejected): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
