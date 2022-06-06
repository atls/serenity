import { Module }                      from '@nestjs/common'

import { ApplicationModule }           from '@collaboration/application'
import { PersistenceModule }           from '@collaboration/persistence'

import { CustomerController }          from './controllers'
import { CustomerQueriesController }   from './controllers'
import { DiscussionController }        from './controllers'
import { DiscussionQueriesController } from './controllers'
import { ProjectController }           from './controllers'
import { ProjectQueriesController }    from './controllers'
import { ReplyController }             from './controllers'
import { ReplyQueriesController }      from './controllers'
import { ReviewQueriesController }     from './controllers'
import { SpecialistController }        from './controllers'
import { SpecialistQueriesController } from './controllers'

@Module({
  imports: [PersistenceModule, ApplicationModule],
  controllers: [
    CustomerQueriesController,
    SpecialistQueriesController,
    SpecialistController,
    CustomerController,
    ProjectQueriesController,
    ProjectController,
    ReplyQueriesController,
    ReplyController,
    ReviewQueriesController,
    DiscussionController,
    DiscussionQueriesController,
  ],
})
export class ServiceModule {}
