import { Injectable }               from '@nestjs/common'
import { WriteRepository }          from '@node-ts/ddd'
import { Connection }               from 'typeorm'

import { Message as MessageEntity } from '@collaboration/domain'

import { Message }                  from '../entities/index.js'
import { DomainEventPublisher }     from '../events/index.js'
import { DomainLogger }             from '../events/index.js'

@Injectable()
// @ts-ignore
export class MessageEntityRepository extends WriteRepository<MessageEntity, Message> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: DomainLogger,
    private readonly bus: DomainEventPublisher
  ) {
    // @ts-ignore
    super(MessageEntity, Message, connection, bus, logger)
  }
}
