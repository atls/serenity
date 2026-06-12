import { Injectable }                     from '@nestjs/common'
import { WriteRepository }                from '@node-ts/ddd'
import { Uuid }                           from '@node-ts/ddd-types'
import { Connection }                     from 'typeorm'

import { Discussion as DiscussionEntity } from '@collaboration/domain'

import { Discussion }                     from '../entities/index.js'
import { DomainEventPublisher }           from '../events/index.js'
import { DomainLogger }                   from '../events/index.js'

@Injectable()
// @ts-ignore
export class DiscussionEntityRepository extends WriteRepository<DiscussionEntity, Discussion> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: DomainLogger,
    private readonly bus: DomainEventPublisher
  ) {
    // @ts-ignore
    super(DiscussionEntity, Discussion, connection, bus, logger)
  }

  async getByParticipants(customerId: Uuid, specialistId: Uuid): Promise<DiscussionEntity | null> {
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
