import { Injectable }             from '@nestjs/common'
import { WriteRepository }        from '@node-ts/ddd'
import { Connection }             from 'typeorm'

import { Review as ReviewEntity } from '@collaboration/domain'

import { Review }                 from '../entities/index.js'
import { DomainEventPublisher }   from '../events/index.js'
import { DomainLogger }           from '../events/index.js'

@Injectable()
// @ts-ignore
export class ReviewEntityRepository extends WriteRepository<ReviewEntity, Review> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: DomainLogger,
    private readonly bus: DomainEventPublisher
  ) {
    // @ts-ignore
    super(ReviewEntity, Review, connection, bus, logger)
  }
}
