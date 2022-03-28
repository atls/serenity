import { Module }                    from '@nestjs/common'

import { CommandsModule }            from '@hits/commands'
import { PersistenceModule }         from '@hits/persistence'
import { QueriesModule }             from '@hits/queries'

import { ActivityController }        from './controllers'
import { ActivityQueriesController } from './controllers'
import { CounterQueriesController }  from './controllers'

@Module({
  imports: [
    PersistenceModule,
    CommandsModule,
    QueriesModule,
  ],
  controllers: [CounterQueriesController, ActivityController, ActivityQueriesController],
})
export class ServiceModule {}
