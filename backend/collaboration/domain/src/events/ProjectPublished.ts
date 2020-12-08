import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

export class ProjectPublished extends Event {
  static readonly NAME = 'collaboration/project-published'

  $name = ProjectPublished.NAME

  $version = 0

  constructor(readonly projectId: Uuid) {
    super()
  }
}
