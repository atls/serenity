import { Controller }           from '@nestjs/common'
import { GrpcMethod }           from '@nestjs/microservices'

import { ReviewQueriesService } from '@collaboration/application'

@Controller()
export class ReviewQueriesController {
  constructor(private readonly reviewService: ReviewQueriesService) {}

  @GrpcMethod('CollaborationService', 'getReviews')
  getReviews({ filters, pager }) {
    return this.reviewService.findAll(pager, filters)
  }
}
