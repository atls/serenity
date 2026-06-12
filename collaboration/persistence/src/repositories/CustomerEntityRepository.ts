import { Injectable }                 from '@nestjs/common'
import { WriteRepository }            from '@node-ts/ddd'
import { Uuid }                       from '@node-ts/ddd-types'
import { Connection }                 from 'typeorm'

import { Customer as CustomerEntity } from '@collaboration/domain'

import { Customer }                   from '../entities/index.js'
import { DomainEventPublisher }       from '../events/index.js'
import { DomainLogger }               from '../events/index.js'

@Injectable()
// @ts-ignore
export class CustomerEntityRepository extends WriteRepository<CustomerEntity, Customer> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: DomainLogger,
    private readonly bus: DomainEventPublisher
  ) {
    // @ts-ignore
    super(CustomerEntity, Customer, connection, bus, logger)
  }

  async getById(id: Uuid): Promise<CustomerEntity> {
    let writeModel = await this.repository.findOne(id)

    if (writeModel === undefined) {
      writeModel = this.repository.create({ id })

      await this.repository.save(writeModel)
    }

    return this.toAggregateRoot(writeModel)
  }
}
