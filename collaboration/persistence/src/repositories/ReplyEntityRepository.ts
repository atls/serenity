import { Injectable }           from '@nestjs/common'
import { WriteRepository }      from '@node-ts/ddd'
import { Connection }           from 'typeorm'

import { Reply as ReplyEntity } from '@collaboration/domain'

import { Reply }                from '../entities/index.js'
import { DomainEventPublisher } from '../events/index.js'
import { DomainLogger }         from '../events/index.js'

@Injectable()
// @ts-ignore
export class ReplyEntityRepository extends WriteRepository<ReplyEntity, Reply> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: DomainLogger,
    private readonly bus: DomainEventPublisher
  ) {
    // @ts-ignore
    super(ReplyEntity, Reply, connection, bus, logger)
  }
}
