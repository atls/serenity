import { BusModule }         from '@monstrs/nestjs-bus'
import { Module }            from '@nestjs/common'

import { CommandsModule }    from '@hits/commands'
import { PersistenceModule } from '@hits/persistence'
import { QueriesModule }     from '@hits/queries'

import {
  ActivityController,
  ActivityQueriesController,
  CounterQueriesController,
} from './controllers'

@Module({
  imports: [
    BusModule.forRabbitMq({
      queueName: 'hits',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
    PersistenceModule,
    CommandsModule,
    QueriesModule,
  ],
  controllers: [CounterQueriesController, ActivityController, ActivityQueriesController],
})
export class ServiceModule {}
