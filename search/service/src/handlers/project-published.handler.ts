import { ProjectPublished }   from '@collaboration/domain'
import { HandlesMessage }     from '@serenity/nestjs-bus'
import { Handler }            from '@node-ts/bus-core'

import { ProjectDataService } from '../services/index.js'

@HandlesMessage(ProjectPublished)
export class ProjectPublishedHandler implements Handler<ProjectPublished> {
  constructor(private readonly projectDataService: ProjectDataService) {}

  async handle(event: ProjectPublished): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
