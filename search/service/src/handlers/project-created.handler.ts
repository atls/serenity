import { ProjectCreated }     from '@collaboration/domain'
import { HandlesMessage }     from '@serenity/nestjs-bus'
import { Handler }            from '@node-ts/bus-core'

import { ProjectDataService } from '../services/index.js'

@HandlesMessage(ProjectCreated)
export class ProjectCreatedHandler implements Handler<ProjectCreated> {
  constructor(private readonly projectDataService: ProjectDataService) {}

  async handle(event: ProjectCreated): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
