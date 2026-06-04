import { Controller }          from '@nestjs/common'

import { ReplyQueriesService } from '@collaboration/application'
import { GrpcMethod }          from '@nestjs/microservices'

@Controller()
export class ReplyQueriesController {
  constructor(private readonly replyService: ReplyQueriesService) {}

  @GrpcMethod('CollaborationService', 'getReplies')
  getReplies({ filters, pager }) {
    return this.replyService.findAll(pager, filters)
  }
}
