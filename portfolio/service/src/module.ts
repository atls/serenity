import { Module }                     from '@nestjs/common'

import { ApplicationModule }          from '@portfolio/application'
import { PersistenceModule }          from '@portfolio/persistence'

import { PortfolioController }        from './controllers/index.js'
import { PortfolioQueriesController } from './controllers/index.js'

@Module({
  imports: [PersistenceModule, ApplicationModule],
  controllers: [PortfolioController, PortfolioQueriesController],
})
export class ServiceModule {}
