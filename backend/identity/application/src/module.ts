import { Module }                 from '@nestjs/common'

import { UserApplicationService } from './services'
import { UserQueriesService }     from './services'

@Module({
  providers: [UserApplicationService, UserQueriesService],
  exports: [UserApplicationService, UserQueriesService],
})
export class ApplicationModule {}
