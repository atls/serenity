import { Injectable }                     from '@nestjs/common'
import { Connection }                     from 'typeorm'
import { Repository }                     from 'typeorm'

import { Specialist as SpecialistEntity } from '@collaboration/domain'

import { Specialist }                     from '../entities/index.js'
import { DomainEventPublisher }           from '../events/index.js'

@Injectable()
// @ts-ignore
export class SpecialistEntityRepository {
  protected readonly repository: Repository<Specialist>

  constructor(
    connection: Connection,
    private readonly bus: DomainEventPublisher
  ) {
    this.repository = connection.getRepository(Specialist)
  }

  async save(aggregateRoot: SpecialistEntity): Promise<void> {
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

  private toAggregateRoot(writeModel: Specialist): SpecialistEntity {
    const aggregateRoot = new SpecialistEntity(writeModel.id)

    Object.assign(aggregateRoot, writeModel)
    aggregateRoot.pullDomainEvents?.()

    return aggregateRoot
  }

  private toWriteModel(aggregateRoot: SpecialistEntity): Specialist {
    const writeModel = this.repository.create() as Specialist

    for (const [key, value] of Object.entries(aggregateRoot)) {
      if (key !== 'domainEvents' && key !== 'removed') {
        ;(writeModel as any)[key] = value
      }
    }

    return writeModel
  }

  async getById(id: string): Promise<SpecialistEntity> {
    let writeModel = await this.repository.findOne(id)

    if (writeModel === undefined) {
      writeModel = this.repository.create({ id })

      await this.repository.save(writeModel)
    }

    return this.toAggregateRoot(writeModel)
  }
}
