import { Injectable }                     from '@nestjs/common'
import { Connection }                     from 'typeorm'

import { Specialist as SpecialistEntity } from '@collaboration/domain'
import { Bus }                            from '@serenity/nestjs-bus'
import { Logger }                         from '@serenity/nestjs-bus'
import { WriteRepository }                from '@node-ts/ddd'
import { Uuid }                           from '@node-ts/ddd-types'

import { Specialist }                     from '../entities/index.js'

@Injectable()
// @ts-ignore
export class SpecialistEntityRepository extends WriteRepository<SpecialistEntity, Specialist> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(SpecialistEntity, Specialist, connection, bus, logger)
  }

  async getById(id: Uuid): Promise<SpecialistEntity> {
    let writeModel = await this.repository.findOne(id)

    if (writeModel === undefined) {
      writeModel = this.repository.create({ id })

      await this.repository.save(writeModel)
    }

    return this.toAggregateRoot(writeModel)
  }
}
