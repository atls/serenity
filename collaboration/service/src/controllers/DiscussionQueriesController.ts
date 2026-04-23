import { Controller }               from '@nestjs/common'

import { DiscussionQueriesService } from '@collaboration/application'
import { GrpcMethod }               from '@nestjs/microservices'

@Controller()
export class DiscussionQueriesController {
  constructor(private readonly discussionService: DiscussionQueriesService) {}

  @GrpcMethod('CollaborationService', 'getDiscussions')
  getDiscussions({ filters, pager }) {
    return this.discussionService.findAll(pager, filters)
  }

  @GrpcMethod('CollaborationService', 'getChatDiscussions')
  getChatDiscussions({ filters, pager }) {
    return this.discussionService.findChatAll(pager, filters)
  }
}
