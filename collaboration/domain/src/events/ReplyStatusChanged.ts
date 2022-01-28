import { Event }       from '@node-ts/bus-messages'

import { ReplyStatus } from '../model'

export class ReplyStatusChanged extends Event {
  static readonly NAME = 'collaboration/reply-status-changed'

  $name = ReplyStatusChanged.NAME

  $version = 0

  constructor(readonly replyId: string, readonly status: ReplyStatus) {
    super()
  }
}
