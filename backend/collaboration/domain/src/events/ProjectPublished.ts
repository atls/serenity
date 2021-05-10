import { Uuid }  from '@node-ts/ddd-types'

import { Event } from '@node-ts/bus-messages'

export class ProjectPublished extends Event {
  static readonly NAME = 'collaboration/project-published'

  $name = ProjectPublished.NAME

  $version = 0

  constructor(readonly projectId: Uuid) {
    super()
  }
}
