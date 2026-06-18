import { ReplyStatus } from '../model/index.js'

export class ReplyStatusChanged {
  static readonly NAME = 'collaboration/reply-status-changed'

  $name = ReplyStatusChanged.NAME

  $version = 0

  constructor(
    readonly replyId: string,
    readonly status: ReplyStatus
  ) {}
}
