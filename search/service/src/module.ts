import { Module }                       from '@nestjs/common'
import { ElasticsearchModule }          from '@nestjs/elasticsearch'

import { ProjectSearchController }      from './controllers/index.js'
import { SpecialistSearchController }   from './controllers/index.js'
import { ProjectCompletedHandler }      from './handlers/index.js'
import { ProjectCreatedHandler }        from './handlers/index.js'
import { ProjectPublishedHandler }      from './handlers/index.js'
import { ProjectReplyConfirmedHandler } from './handlers/index.js'
import { ProjectReplyRejectedHandler }  from './handlers/index.js'
import { ProjectUpdatedHandler }        from './handlers/index.js'
import { SpecialistUpdatedHandler }     from './handlers/index.js'
import { ProjectDataService }           from './services/index.js'
import { ProjectIndexService }          from './services/index.js'
import { SpecialistDataService }        from './services/index.js'
import { SpecialistIndexService }       from './services/index.js'

@Module({
  imports: [
    ElasticsearchModule.register({
      node: process.env.ELASTICSEARCH_HOST || 'http://elasticsearch-rest:9200',
    }),
  ],
  providers: [
    ProjectIndexService,
    ProjectDataService,
    SpecialistIndexService,
    SpecialistDataService,
    SpecialistUpdatedHandler,
    ProjectUpdatedHandler,
    ProjectCompletedHandler,
    ProjectReplyConfirmedHandler,
    ProjectReplyRejectedHandler,
    ProjectCreatedHandler,
    ProjectPublishedHandler,
  ],
  controllers: [ProjectSearchController, SpecialistSearchController],
})
export class ServiceModule {}
