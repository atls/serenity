import { Controller }          from '@nestjs/common'
import { GrpcMethod }          from '@nestjs/microservices'

import { ReplyQueriesService } from '@collaboration/application'

@Controller()
export class ReplyQueriesController {
  constructor(private readonly replyService: ReplyQueriesService) {}

  @GrpcMethod('CollaborationService', 'getReplies')
  getReplies({ filters, pager }) {
    return this.replyService.findAll(pager, filters)
  }
}
