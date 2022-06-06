import { Handler }                    from '@node-ts/bus-core'

import { ReviewCreated }              from '@collaboration/domain'
import { SpecialistEntityRepository } from '@collaboration/persistence'

export class SpecialistReviewCreatedHandler implements Handler<ReviewCreated> {
  constructor(private readonly specialistRepository: SpecialistEntityRepository) {}

  async handle(event: ReviewCreated): Promise<void> {
    const specialist = await this.specialistRepository.getById(event.specialistId)

    specialist.incrementReviewCount()
    specialist.incrementCompletedProjects()

    await this.specialistRepository.save(specialist)
  }
}
