import { Injectable }                 from '@nestjs/common'
import { Connection }                 from 'typeorm'

import { Customer as CustomerEntity } from '@collaboration/domain'
import { Bus }                        from '@serenity/nestjs-bus'
import { Logger }                     from '@serenity/nestjs-bus'
import { WriteRepository }            from '@node-ts/ddd'
import { Uuid }                       from '@node-ts/ddd-types'

import { Customer }                   from '../entities/index.js'

@Injectable()
// @ts-ignore
export class CustomerEntityRepository extends WriteRepository<CustomerEntity, Customer> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
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
