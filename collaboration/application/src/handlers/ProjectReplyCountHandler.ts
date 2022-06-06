import { Handler }                 from '@node-ts/bus-core'

import { ReplyCreated }            from '@collaboration/domain'
import { ProjectEntityRepository } from '@collaboration/persistence'

export class ProjectReplyCountHandler implements Handler<ReplyCreated> {
  constructor(private readonly projectRepository: ProjectEntityRepository) {}

  async handle(event: ReplyCreated): Promise<void> {
    const project = await this.projectRepository.getById(event.projectId)

    project.incrementReplyCount()

    await this.projectRepository.save(project)
  }
}
