import { ProjectReplyConfirmed } from '@collaboration/domain'
import { HandlesMessage }        from '@monstrs/nestjs-bus'
import { Handler }               from '@node-ts/bus-core'

import { ProjectDataService }    from '../services/index.js'

@HandlesMessage(ProjectReplyConfirmed)
export class ProjectReplyConfirmedHandler implements Handler<ProjectReplyConfirmed> {
  constructor(private readonly projectDataService: ProjectDataService) {}

  async handle(event: ProjectReplyConfirmed): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
