import { Module }          from '@nestjs/common'

import { ActivityService } from './services'
import { CounterService }  from './services'

@Module({
  providers: [CounterService, ActivityService],
  exports: [CounterService, ActivityService],
})
export class QueriesModule {}
