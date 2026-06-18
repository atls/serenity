import { Injectable }                 from '@nestjs/common'
import { Connection }                 from 'typeorm'
import { Repository }                 from 'typeorm'

import { Customer as CustomerEntity } from '@collaboration/domain'

import { Customer }                   from '../entities/index.js'
import { DomainEventPublisher }       from '../events/index.js'

@Injectable()
// @ts-ignore
export class CustomerEntityRepository {
  protected readonly repository: Repository<Customer>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(Customer)
  }

  async save(aggregateRoot: CustomerEntity): Promise<void> {
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

  private toAggregateRoot(writeModel: Customer): CustomerEntity {
    const aggregateRoot = new CustomerEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: CustomerEntity): Customer {
    const writeModel = this.repository.create() as Customer

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }

  async getById(id: string): Promise<CustomerEntity> {
    let writeModel = await this.repository.findOne(id)

    if (writeModel === undefined) {
      writeModel = this.repository.create({ id })

      await this.repository.save(writeModel)
    }

    return this.toAggregateRoot(writeModel)
  }
}
