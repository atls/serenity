import { Uuid }  from '@node-ts/ddd-types'

import { Event } from '@node-ts/bus-messages'

export class ProjectReplyConfirmed extends Event {
  static readonly NAME = 'collaboration/project-reply-confirmed'

  $name = ProjectReplyConfirmed.NAME

  $version = 0

  constructor(readonly projectId: Uuid, readonly replyId: string) {
    super()
  }
}
