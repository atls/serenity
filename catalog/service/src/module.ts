import { Module }                         from '@nestjs/common'

import { ApplicationModule }              from '@catalog/application'
import { PersistenceModule }              from '@catalog/persistence'

import { CategoryController }             from './controllers/index.js'
import { CategoryGroupController }        from './controllers/index.js'
import { CategoryGroupQueriesController } from './controllers/index.js'
import { CategoryQueriesController }      from './controllers/index.js'

@Module({
  imports: [PersistenceModule, ApplicationModule],
  controllers: [
    CategoryGroupController,
    CategoryController,
    CategoryGroupQueriesController,
    CategoryQueriesController,
  ],
})
export class ServiceModule {}
