import { Event }          from '@node-ts/bus-messages'
import { Uuid }           from '@node-ts/ddd-types'

import { Company }        from '../model'
import { PrivatePerson }  from '../model'
import { Specialisation } from '../model'

export class SpecialistUpdated extends Event {
  static readonly NAME = 'collaboration/specialist-updated'

  $name = SpecialistUpdated.NAME

  $version = 0

  constructor(
    readonly specialistId: Uuid,
    readonly interaction: PrivatePerson | Company,
    readonly specialisation: Specialisation,
    readonly description: string
  ) {
    super()
  }
}
