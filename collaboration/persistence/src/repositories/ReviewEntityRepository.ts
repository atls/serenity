import { Injectable }             from '@nestjs/common'
import { Connection }             from 'typeorm'

import { Review as ReviewEntity } from '@collaboration/domain'
import { Bus }                    from '@serenity/nestjs-bus'
import { Logger }                 from '@serenity/nestjs-bus'
import { WriteRepository }        from '@node-ts/ddd'

import { Review }                 from '../entities/index.js'

@Injectable()
// @ts-ignore
export class ReviewEntityRepository extends WriteRepository<ReviewEntity, Review> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(ReviewEntity, Review, connection, bus, logger)
  }
}
