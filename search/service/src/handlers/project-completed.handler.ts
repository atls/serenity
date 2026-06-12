import { ProjectCompleted }   from '@collaboration/domain'
import { HandlesMessage }     from '@serenity/nestjs-bus'
import { Handler }            from '@node-ts/bus-core'

import { ProjectDataService } from '../services/index.js'

@HandlesMessage(ProjectCompleted)
export class ProjectCompletedHandler implements Handler<ProjectCompleted> {
  constructor(private readonly projectDataService: ProjectDataService) {}

  async handle(event: ProjectCompleted): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
