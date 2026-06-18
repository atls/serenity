import { Injectable }             from '@nestjs/common'
import { Connection }             from 'typeorm'
import { Repository }             from 'typeorm'

import { Upload as UploadEntity } from '@files/domain'

import { Upload }                 from '../entities/index.js'
import { DomainEventPublisher }   from '../events/index.js'

@Injectable()
// @ts-ignore
export class UploadEntityRepository {
  protected readonly repository: Repository<Upload>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(Upload)
  }

  async getById(id: string): Promise<UploadEntity> {
    const writeModel = await (this.repository as any).findOne(id)

    if (!writeModel) {
      throw new Error(`UploadEntity with id ${id} was not found`)
    }

    return this.toAggregateRoot(writeModel)
  }

  async save(aggregateRoot: UploadEntity): Promise<void> {
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

  private toAggregateRoot(writeModel: Upload): UploadEntity {
    const aggregateRoot = new UploadEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: UploadEntity): Upload {
    const writeModel = this.repository.create() as Upload

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }
}
