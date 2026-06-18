export class ProjectReplyConfirmed {
  static readonly NAME = 'collaboration/project-reply-confirmed'

  $name = ProjectReplyConfirmed.NAME

  $version = 0

  constructor(
    readonly projectId: string,
    readonly replyId: string
  ) {}
}
