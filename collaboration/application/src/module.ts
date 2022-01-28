import { Module }                         from '@nestjs/common'

import { ProjectReplyCountHandler }       from './handlers'
import { RecalculateRatingHandler }       from './handlers'
import { SpecialistReviewCreatedHandler } from './handlers'
import { CustomerQueriesService }         from './services'
import { CustomerService }                from './services'
import { DiscussionQueriesService }       from './services'
import { DiscussionService }              from './services'
import { ProjectIdService }               from './services'
import { ProjectQueriesService }          from './services'
import { ProjectService }                 from './services'
import { ReplyQueriesService }            from './services'
import { ReplyService }                   from './services'
import { ReviewQueriesService }           from './services'
import { SpecialistQueriesService }       from './services'
import { SpecialistService }              from './services'

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
