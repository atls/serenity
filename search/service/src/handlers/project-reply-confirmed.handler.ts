import { Controller }            from '@nestjs/common'
import { EventPattern }          from '@nestjs/microservices'

import { ProjectReplyConfirmed } from '@collaboration/domain'

import { ProjectDataService }    from '../services/index.js'

@Controller()
export class ProjectReplyConfirmedHandler {
  constructor(private readonly projectDataService: ProjectDataService) {}

  @EventPattern(ProjectReplyConfirmed.NAME)
  async handle(event: ProjectReplyConfirmed): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
