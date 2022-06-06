import { Module }               from '@nestjs/common'

import { TrackActivityService } from './services'
import { TrackService }         from './services'

@Module({
  providers: [TrackService, TrackActivityService],
  exports: [TrackService, TrackActivityService],
})
export class CommandsModule {}
