import { Module }                       from '@nestjs/common'
import { ElasticsearchModule }          from '@nestjs/elasticsearch'

import { ProjectSearchController }      from './controllers'
import { SpecialistSearchController }   from './controllers'
import { ProjectCompletedHandler }      from './handlers'
import { ProjectCreatedHandler }        from './handlers'
import { ProjectPublishedHandler }      from './handlers'
import { ProjectReplyConfirmedHandler } from './handlers'
import { ProjectReplyRejectedHandler }  from './handlers'
import { ProjectUpdatedHandler }        from './handlers'
import { SpecialistUpdatedHandler }     from './handlers'
import { ProjectDataService }           from './services'
import { ProjectIndexService }          from './services'
import { SpecialistDataService }        from './services'
import { SpecialistIndexService }       from './services'

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
