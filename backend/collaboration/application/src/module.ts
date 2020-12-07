import { Module } from '@nestjs/common'

import {
  ProjectReplyCountHandler,
  RecalculateRatingHandler,
  SpecialistReviewCreatedHandler,
} from './handlers'
import {
  CustomerQueriesService,
  CustomerService,
  DiscussionQueriesService,
  DiscussionService,
  ProjectIdService,
  ProjectQueriesService,
  ProjectService,
  ReplyQueriesService,
  ReplyService,
  ReviewQueriesService,
  SpecialistQueriesService,
  SpecialistService,
} from './services'

@Module({
  providers: [
    SpecialistReviewCreatedHandler,
    ProjectReplyCountHandler,
    RecalculateRatingHandler,
    SpecialistQueriesService,
    CustomerQueriesService,
    SpecialistService,
    CustomerService,
    ProjectQueriesService,
    ProjectService,
    ReplyQueriesService,
    ReplyService,
    ReviewQueriesService,
    DiscussionService,
    DiscussionQueriesService,
    ProjectIdService,
  ],
  exports: [
    SpecialistQueriesService,
    CustomerQueriesService,
    SpecialistService,
    CustomerService,
    ProjectQueriesService,
    ProjectService,
    ReplyQueriesService,
    ReplyService,
    ReviewQueriesService,
    DiscussionService,
    DiscussionQueriesService,
  ],
})
export class ApplicationModule {}
