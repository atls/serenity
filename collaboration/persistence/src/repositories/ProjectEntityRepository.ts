import { Injectable }               from '@nestjs/common'
import { Connection }               from 'typeorm'
import { Repository }               from 'typeorm'

import { Project as ProjectEntity } from '@collaboration/domain'

import { Project }                  from '../entities/index.js'
import { DomainEventPublisher }     from '../events/index.js'
import { ProjectEntityNotFoundError }     from './errors/project-entity-not-found.error.js'

@Injectable()
// @ts-ignore
export class ProjectEntityRepository {
  protected readonly repository: Repository<Project>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(Project)
  }

  async getById(id: string): Promise<ProjectEntity> {
    const writeModel = await (this.repository as any).findOne(id)

    if (!writeModel) {
      throw new ProjectEntityNotFoundError(id)
    }

    return this.toAggregateRoot(writeModel)
  }

  async save(aggregateRoot: ProjectEntity): Promise<void> {
    const events = aggregateRoot.pullDomainEvents?.() || []

    if (aggregateRoot.isDeleted?.()) {
      await (this.repository as any).delete(aggregateRoot.id)
    } else {
      await this.repository.save(this.toWriteModel(aggregateRoot) as any)
    }

    for (const event of events) {
      await this.bus.publish(event)
    }
  }

  private toAggregateRoot(writeModel: Project): ProjectEntity {
    const aggregateRoot = new ProjectEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: ProjectEntity): Project {
    const writeModel = this.repository.create() as Project

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }
}
