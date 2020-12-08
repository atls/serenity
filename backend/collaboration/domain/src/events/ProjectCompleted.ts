import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

export class ProjectCompleted extends Event {
  static readonly NAME = 'collaboration/project-completed'

  $name = ProjectCompleted.NAME

  $version = 0

  constructor(readonly projectId: Uuid) {
    super()
  }
}
