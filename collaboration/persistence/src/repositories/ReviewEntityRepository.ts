import { Injectable }             from '@nestjs/common'
import { Connection }             from 'typeorm'
import { Repository }             from 'typeorm'

import { Review as ReviewEntity } from '@collaboration/domain'

import { Review }                 from '../entities/index.js'
import { DomainEventPublisher }   from '../events/index.js'
import { ReviewEntityNotFoundError }          from './errors.js'

@Injectable()
// @ts-ignore
export class ReviewEntityRepository {
  protected readonly repository: Repository<Review>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(Review)
  }

  async getById(id: string): Promise<ReviewEntity> {
    const writeModel = await (this.repository as any).findOne(id)

    if (!writeModel) {
      throw new ReviewEntityNotFoundError(id)
    }

    return this.toAggregateRoot(writeModel)
  }

  async save(aggregateRoot: ReviewEntity): Promise<void> {
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

  private toAggregateRoot(writeModel: Review): ReviewEntity {
    const aggregateRoot = new ReviewEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: ReviewEntity): Review {
    const writeModel = this.repository.create() as Review

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }
}
