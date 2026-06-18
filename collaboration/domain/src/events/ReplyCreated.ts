export class ReplyCreated {
  static readonly NAME = 'collaboration/reply-created'

  $name = ReplyCreated.NAME

  $version = 0

  constructor(
    readonly replyId: string,
    readonly projectId: string,
    readonly specialistId: string,
    readonly discussionId: string
  ) {}
}
