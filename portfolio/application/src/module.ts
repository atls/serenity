import { Module }                  from '@nestjs/common'

import { PortfolioQueriesService } from './services/index.js'
import { PortfolioService }        from './services/index.js'

@Module({
  providers: [PortfolioService, PortfolioQueriesService],
  exports: [PortfolioService, PortfolioQueriesService],
})
export class ApplicationModule {}
