import { Address }         from '../model/index.js'
import { BeginningOfWork } from '../model/index.js'

export class ProjectUpdated {
  static readonly NAME = 'collaboration/project-updated'

  $name = ProjectUpdated.NAME

  $version = 0

  constructor(
    readonly projectId: string,
    readonly name: string,
    readonly photos: string[],
    readonly address: Address,
    readonly beginningOfWork: BeginningOfWork,
    readonly budget: number,
    readonly legalEntitiesOnly: boolean,
    readonly worksheet: string,
    readonly description?: string
  ) {}
}
