export class ProjectReplyRejected {
  static readonly NAME = 'collaboration/project-reply-rejected'

  $name = ProjectReplyRejected.NAME

  $version = 0

  constructor(
    readonly projectId: string,
    readonly replyId: string
  ) {}
}
