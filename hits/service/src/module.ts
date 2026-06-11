import { Module }                    from '@nestjs/common'

import { CommandsModule }            from '@hits/commands'
import { PersistenceModule }         from '@hits/persistence'
import { QueriesModule }             from '@hits/queries'

import { ActivityController }        from './controllers/index.js'
import { ActivityQueriesController } from './controllers/index.js'
import { CounterQueriesController }  from './controllers/index.js'

@Module({
  imports: [PersistenceModule, CommandsModule, QueriesModule],
  controllers: [CounterQueriesController, ActivityController, ActivityQueriesController],
})
export class ServiceModule {}
