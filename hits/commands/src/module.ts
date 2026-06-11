import { Module }               from '@nestjs/common'

import { TrackActivityService } from './services/index.js'
import { TrackService }         from './services/index.js'

@Module({
  providers: [TrackService, TrackActivityService],
  exports: [TrackService, TrackActivityService],
})
export class CommandsModule {}
