import { Injectable }                   from '@nestjs/common'
import { Connection }                   from 'typeorm'
import { Repository }                   from 'typeorm'

import { Portfolio as PortfolioEntity } from '@portfolio/domain'

import { Portfolio }                    from '../entities/index.js'
import { DomainEventPublisher }         from '../events/index.js'
import { PortfolioEntityNotFoundError }   from './errors/portfolio-entity-not-found.error.js'

@Injectable()
// @ts-ignore
export class PortfolioEntityRepository {
  protected readonly repository: Repository<Portfolio>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(Portfolio)
  }

  async getById(id: string): Promise<PortfolioEntity> {
    const writeModel = await (this.repository as any).findOne(id)

    if (!writeModel) {
      throw new PortfolioEntityNotFoundError(id)
    }

    return this.toAggregateRoot(writeModel)
  }

  async save(aggregateRoot: PortfolioEntity): Promise<void> {
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

  private toAggregateRoot(writeModel: Portfolio): PortfolioEntity {
    const aggregateRoot = new PortfolioEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: PortfolioEntity): Portfolio {
    const writeModel = this.repository.create() as Portfolio

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }
}
