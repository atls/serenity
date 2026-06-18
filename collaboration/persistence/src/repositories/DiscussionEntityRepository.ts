import { Injectable }                     from '@nestjs/common'
import { Connection }                     from 'typeorm'
import { Repository }                     from 'typeorm'

import { Discussion as DiscussionEntity } from '@collaboration/domain'

import { Discussion }                     from '../entities/index.js'
import { DomainEventPublisher }           from '../events/index.js'
import { DiscussionEntityNotFoundError }      from './errors.js'

@Injectable()
// @ts-ignore
export class DiscussionEntityRepository {
  protected readonly repository: Repository<Discussion>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(Discussion)
  }

  async getById(id: string): Promise<DiscussionEntity> {
    const writeModel = await (this.repository as any).findOne(id)

    if (!writeModel) {
      throw new DiscussionEntityNotFoundError(id)
    }

    return this.toAggregateRoot(writeModel)
  }

  async save(aggregateRoot: DiscussionEntity): Promise<void> {
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

  private toAggregateRoot(writeModel: Discussion): DiscussionEntity {
    const aggregateRoot = new DiscussionEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: DiscussionEntity): Discussion {
    const writeModel = this.repository.create() as Discussion

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }

  async getByParticipants(
    customerId: string,
    specialistId: string
  ): Promise<DiscussionEntity | null> {
    const writeModel = await this.repository.findOne({
      where: {
        customerId,
        specialistId,
      },
    })

    if (writeModel) {
      return this.toAggregateRoot(writeModel)
    }

    return null
  }
}
