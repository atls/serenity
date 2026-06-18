import { Injectable }                           from '@nestjs/common'
import { Connection }                           from 'typeorm'
import { Repository }                           from 'typeorm'

import { CategoryGroup as CategoryGroupEntity } from '@catalog/domain'

import { CategoryGroup }                        from '../entities/index.js'
import { DomainEventPublisher }                 from '../events/index.js'
import { CategoryGroupEntityNotFoundError }   from './errors.js'

@Injectable()
// @ts-ignore
export class CategoryGroupEntityRepository {
  protected readonly repository: Repository<CategoryGroup>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(CategoryGroup)
  }

  async getById(id: string): Promise<CategoryGroupEntity> {
    const writeModel = await (this.repository as any).findOne(id)

    if (!writeModel) {
      throw new CategoryGroupEntityNotFoundError(id)
    }

    return this.toAggregateRoot(writeModel)
  }

  async save(aggregateRoot: CategoryGroupEntity): Promise<void> {
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

  private toAggregateRoot(writeModel: CategoryGroup): CategoryGroupEntity {
    const aggregateRoot = new CategoryGroupEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: CategoryGroupEntity): CategoryGroup {
    const writeModel = this.repository.create() as CategoryGroup

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }
}
