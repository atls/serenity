import { Module }                         from '@nestjs/common'

import { ApplicationModule }              from '@catalog/application'
import { PersistenceModule }              from '@catalog/persistence'

import { CategoryController }             from './controllers'
import { CategoryGroupController }        from './controllers'
import { CategoryGroupQueriesController } from './controllers'
import { CategoryQueriesController }      from './controllers'

@Module({
  imports: [
    PersistenceModule,
    ApplicationModule,
  ],
  controllers: [
    CategoryGroupController,
    CategoryController,
    CategoryGroupQueriesController,
    CategoryQueriesController,
  ],
})
export class ServiceModule {}
