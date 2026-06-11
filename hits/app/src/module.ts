import { Module }            from '@nestjs/common'

import { CommandsModule }    from '@hits/commands'
import { PersistenceModule } from '@hits/persistence'

import { TrackController }   from './track.controller.js'

@Module({
  imports: [PersistenceModule, CommandsModule],
  controllers: [TrackController],
})
export class ApplicationModule {}
