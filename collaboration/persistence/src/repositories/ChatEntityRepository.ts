import { Injectable }           from '@nestjs/common'
import { WriteRepository }      from '@node-ts/ddd'
import { Uuid }                 from '@node-ts/ddd-types'
import { Connection }           from 'typeorm'

import { Chat as ChatEntity }   from '@collaboration/domain'

import { Chat }                 from '../entities/index.js'
import { DomainEventPublisher } from '../events/index.js'
import { WriteRepositoryLogger }         from '../events/index.js'

@Injectable()
// @ts-ignore
export class ChatEntityRepository extends WriteRepository<ChatEntity, Chat> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: WriteRepositoryLogger,
    private readonly bus: DomainEventPublisher
  ) {
    // @ts-ignore
    super(ChatEntity, Chat, connection, bus, logger)
  }

  async getByParticipants(customerId: Uuid, specialistId: Uuid): Promise<ChatEntity | null> {
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
