import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

export class ProjectReplyRejected extends Event {
  static readonly NAME = 'collaboration/project-reply-rejected'

  $name = ProjectReplyRejected.NAME

  $version = 0

  constructor(readonly projectId: Uuid, readonly replyId: string) {
    super()
  }
}
