import { LoggerModule }  from '@monstrs/nestjs-logger'
import { BusModule }     from '@monstrs/nestjs-bus'
import { Global }        from '@nestjs/common'
import { Module }        from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import config            from './config'
import { Activity }      from './entities'
import { Counter }       from './entities'
import { View }          from './entities'

const feature = TypeOrmModule.forFeature([Counter, View, Activity])

@Global()
@Module({
  imports: [
    LoggerModule,
    feature.module,
    TypeOrmModule.forRoot(config),
    BusModule.forRabbitMq({
      queueName: 'hits',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
  ],
  // @ts-ignore
  providers: [...feature.providers],
  // @ts-ignore
  exports: [...feature.exports],
})
export class PersistenceModule {}
