import { Injectable }           from '@nestjs/common'
import { Connection }           from 'typeorm'
import { Repository }           from 'typeorm'

import { File as FileEntity }   from '@files/domain'

import { File }                 from '../entities/index.js'
import { DomainEventPublisher } from '../events/index.js'
import { FileEntityNotFoundError }        from './errors/file-entity-not-found.error.js'

@Injectable()
// @ts-ignore
export class FileEntityRepository {
  protected readonly repository: Repository<File>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(File)
  }

  async getById(id: string): Promise<FileEntity> {
    const writeModel = await (this.repository as any).findOne(id)

    if (!writeModel) {
      throw new FileEntityNotFoundError(id)
    }

    return this.toAggregateRoot(writeModel)
  }

  async save(aggregateRoot: FileEntity): Promise<void> {
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

  private toAggregateRoot(writeModel: File): FileEntity {
    const aggregateRoot = new FileEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: FileEntity): File {
    const writeModel = this.repository.create() as File

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }
}
