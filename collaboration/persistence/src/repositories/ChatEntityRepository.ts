import { Injectable }           from '@nestjs/common'
import { Connection }           from 'typeorm'
import { Repository }           from 'typeorm'

import { Chat as ChatEntity }   from '@collaboration/domain'

import { Chat }                 from '../entities/index.js'
import { DomainEventPublisher } from '../events/index.js'
import { ChatEntityNotFoundError }        from './chat-entity-not-found.error.js'

@Injectable()
// @ts-ignore
export class ChatEntityRepository {
  protected readonly repository: Repository<Chat>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(Chat)
  }

  async getById(id: string): Promise<ChatEntity> {
    const writeModel = await (this.repository as any).findOne(id)

    if (!writeModel) {
      throw new ChatEntityNotFoundError(id)
    }

    return this.toAggregateRoot(writeModel)
  }

  async save(aggregateRoot: ChatEntity): Promise<void> {
    const events = aggregateRoot.pullDomainEvents?.() || []

    if (aggregateRoot.isDeleted?.()) {
      await (this.repository as any).delete(aggregateRoot.id)
    } else {
      await this.repository.save(this.toWriteModel(aggregateRoot) as any)
    }

    for (const event of events) {
      await this.bus.publish(event)
    }
  }

  private toAggregateRoot(writeModel: Chat): ChatEntity {
    const aggregateRoot = new ChatEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: ChatEntity): Chat {
    const writeModel = this.repository.create() as Chat

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }

  async getByParticipants(customerId: string, specialistId: string): Promise<ChatEntity | null> {
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
