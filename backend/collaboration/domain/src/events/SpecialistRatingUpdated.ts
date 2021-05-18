import { Uuid }  from '@node-ts/ddd-types'

import { Event } from '@node-ts/bus-messages'

export class SpecialistRatingUpdated extends Event {
  static readonly NAME = 'collaboration/specialist-rating-updated'

  $name = SpecialistRatingUpdated.NAME

  $version = 0

  constructor(readonly specialistId: Uuid, readonly rating: number) {
    super()
  }
}
