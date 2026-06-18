import { Injectable }           from '@nestjs/common'
import { Connection }           from 'typeorm'
import { Repository }           from 'typeorm'

import { Reply as ReplyEntity } from '@collaboration/domain'

import { Reply }                from '../entities/index.js'
import { DomainEventPublisher } from '../events/index.js'
import { ReplyEntityNotFoundError }       from './reply-entity-not-found.error.js'

@Injectable()
// @ts-ignore
export class ReplyEntityRepository {
  protected readonly repository: Repository<Reply>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(Reply)
  }

  async getById(id: string): Promise<ReplyEntity> {
    const writeModel = await (this.repository as any).findOne(id)

    if (!writeModel) {
      throw new ReplyEntityNotFoundError(id)
    }

    return this.toAggregateRoot(writeModel)
  }

  async save(aggregateRoot: ReplyEntity): Promise<void> {
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

  private toAggregateRoot(writeModel: Reply): ReplyEntity {
    const aggregateRoot = new ReplyEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: ReplyEntity): Reply {
    const writeModel = this.repository.create() as Reply

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }
}
