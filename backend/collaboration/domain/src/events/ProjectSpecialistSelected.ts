import { Uuid }  from '@node-ts/ddd-types'

import { Event } from '@node-ts/bus-messages'

export class ProjectSpecialistSelected extends Event {
  static readonly NAME = 'collaboration/project-specialist-selected'

  $name = ProjectSpecialistSelected.NAME

  $version = 0

  constructor(readonly projectId: Uuid, readonly replyId: string) {
    super()
  }
}
