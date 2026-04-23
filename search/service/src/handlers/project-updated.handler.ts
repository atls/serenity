import { ProjectUpdated }     from '@collaboration/domain'
import { HandlesMessage }     from '@monstrs/nestjs-bus'
import { Handler }            from '@node-ts/bus-core'

import { ProjectDataService } from '../services'

@HandlesMessage(ProjectUpdated)
export class ProjectUpdatedHandler implements Handler<ProjectUpdated> {
  constructor(private readonly projectDataService: ProjectDataService) {}

  async handle(event: ProjectUpdated): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
