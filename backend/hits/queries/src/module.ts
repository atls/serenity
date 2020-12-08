import { Module }                          from '@nestjs/common'

import { ActivityService, CounterService } from './services'

@Module({
  providers: [CounterService, ActivityService],
  exports: [CounterService, ActivityService],
})
export class QueriesModule {}
