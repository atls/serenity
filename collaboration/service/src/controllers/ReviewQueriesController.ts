import { Controller }           from '@nestjs/common'

import { ReviewQueriesService } from '@collaboration/application'
import { GrpcMethod }           from '@nestjs/microservices'

@Controller()
export class ReviewQueriesController {
  constructor(private readonly reviewService: ReviewQueriesService) {}

  @GrpcMethod('CollaborationService', 'getReviews')
  getReviews({ filters, pager }) {
    return this.reviewService.findAll(pager, filters)
  }
}
