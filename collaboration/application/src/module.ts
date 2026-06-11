import { Module }                         from '@nestjs/common'

import { ProjectReplyCountHandler }       from './handlers/index.js'
import { RecalculateRatingHandler }       from './handlers/index.js'
import { SpecialistReviewCreatedHandler } from './handlers/index.js'
import { CustomerQueriesService }         from './services/index.js'
import { CustomerService }                from './services/index.js'
import { DiscussionQueriesService }       from './services/index.js'
import { DiscussionService }              from './services/index.js'
import { ProjectIdService }               from './services/index.js'
import { ProjectQueriesService }          from './services/index.js'
import { ProjectService }                 from './services/index.js'
import { ReplyQueriesService }            from './services/index.js'
import { ReplyService }                   from './services/index.js'
import { ReviewQueriesService }           from './services/index.js'
import { SpecialistQueriesService }       from './services/index.js'
import { SpecialistService }              from './services/index.js'

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
