export class DiscussionCreated {
  static readonly NAME = 'collaboration/discussion-created'

  $name = DiscussionCreated.NAME

  $version = 0

  constructor(
    readonly discussionId: string,
    readonly specialistId: string,
    readonly customerId: string
  ) {}
}
