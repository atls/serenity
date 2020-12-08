import { Module }                             from '@nestjs/common'

import { TrackActivityService, TrackService } from './services'

@Module({
  providers: [TrackService, TrackActivityService],
  exports: [TrackService, TrackActivityService],
})
export class CommandsModule {}
