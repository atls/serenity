import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

export class SpecialistRatingUpdated extends Event {
  static readonly NAME = 'collaboration/specialist-rating-updated'

  $name = SpecialistRatingUpdated.NAME

  $version = 0

  constructor(readonly specialistId: Uuid, readonly rating: number) {
    super()
  }
}
