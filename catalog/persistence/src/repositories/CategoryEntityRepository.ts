import { Injectable }                 from '@nestjs/common'
import { Connection }                 from 'typeorm'
import { Repository }                 from 'typeorm'

import { Category as CategoryEntity } from '@catalog/domain'

import { Category }                   from '../entities/index.js'
import { DomainEventPublisher }       from '../events/index.js'
import { CategoryEntityNotFoundError }    from './category-entity-not-found.error.js'

@Injectable()
// @ts-ignore
export class CategoryEntityRepository {
  protected readonly repository: Repository<Category>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(Category)
  }

  async getById(id: string): Promise<CategoryEntity> {
    const writeModel = await (this.repository as any).findOne(id)

    if (!writeModel) {
      throw new CategoryEntityNotFoundError(id)
    }

    return this.toAggregateRoot(writeModel)
  }

  async save(aggregateRoot: CategoryEntity): Promise<void> {
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

  private toAggregateRoot(writeModel: Category): CategoryEntity {
    const aggregateRoot = new CategoryEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: CategoryEntity): Category {
    const writeModel = this.repository.create() as Category

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }
}
