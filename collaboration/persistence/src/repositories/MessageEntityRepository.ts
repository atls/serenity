import { Injectable }               from '@nestjs/common'
import { Connection }               from 'typeorm'
import { Repository }               from 'typeorm'

import { Message as MessageEntity } from '@collaboration/domain'

import { Message }                  from '../entities/index.js'
import { DomainEventPublisher }     from '../events/index.js'
import { MessageEntityNotFoundError }     from './message-entity-not-found.error.js'

@Injectable()
// @ts-ignore
export class MessageEntityRepository {
  protected readonly repository: Repository<Message>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(Message)
  }

  async getById(id: string): Promise<MessageEntity> {
    const writeModel = await (this.repository as any).findOne(id)

    if (!writeModel) {
      throw new MessageEntityNotFoundError(id)
    }

    return this.toAggregateRoot(writeModel)
  }

  async save(aggregateRoot: MessageEntity): Promise<void> {
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

  private toAggregateRoot(writeModel: Message): MessageEntity {
    const aggregateRoot = new MessageEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: MessageEntity): Message {
    const writeModel = this.repository.create() as Message

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }
}
