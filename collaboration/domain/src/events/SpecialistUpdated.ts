import { Company }        from '../model/index.js'
import { PrivatePerson }  from '../model/index.js'
import { Specialisation } from '../model/index.js'

export class SpecialistUpdated {
  static readonly NAME = 'collaboration/specialist-updated'

  $name = SpecialistUpdated.NAME

  $version = 0

  constructor(
    readonly specialistId: string,
    readonly interaction: PrivatePerson | Company,
    readonly specialisation: Specialisation,
    readonly description: string
  ) {}
}
