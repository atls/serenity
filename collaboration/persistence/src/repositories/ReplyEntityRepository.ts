import { Injectable }           from '@nestjs/common'
import { Connection }           from 'typeorm'

import { Reply as ReplyEntity } from '@collaboration/domain'
import { Bus }                  from '@serenity/nestjs-bus'
import { Logger }               from '@serenity/nestjs-bus'
import { WriteRepository }      from '@node-ts/ddd'

import { Reply }                from '../entities/index.js'

@Injectable()
// @ts-ignore
export class ReplyEntityRepository extends WriteRepository<ReplyEntity, Reply> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(ReplyEntity, Reply, connection, bus, logger)
  }
}
