import { Module }                  from '@nestjs/common'

import { PortfolioQueriesService } from './services'
import { PortfolioService }        from './services'

@Module({
  providers: [PortfolioService, PortfolioQueriesService],
  exports: [PortfolioService, PortfolioQueriesService],
})
export class ApplicationModule {}
