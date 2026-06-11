import { Module }                      from '@nestjs/common'

import { ApplicationModule }           from '@collaboration/application'
import { PersistenceModule }           from '@collaboration/persistence'

import { CustomerController }          from './controllers/index.js'
import { CustomerQueriesController }   from './controllers/index.js'
import { DiscussionController }        from './controllers/index.js'
import { DiscussionQueriesController } from './controllers/index.js'
import { ProjectController }           from './controllers/index.js'
import { ProjectQueriesController }    from './controllers/index.js'
import { ReplyController }             from './controllers/index.js'
import { ReplyQueriesController }      from './controllers/index.js'
import { ReviewQueriesController }     from './controllers/index.js'
import { SpecialistController }        from './controllers/index.js'
import { SpecialistQueriesController } from './controllers/index.js'

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
