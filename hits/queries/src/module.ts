import { Module }          from '@nestjs/common'

import { ActivityService } from './services/index.js'
import { CounterService }  from './services/index.js'

@Module({
  providers: [CounterService, ActivityService],
  exports: [CounterService, ActivityService],
})
export class QueriesModule {}
