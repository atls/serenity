import { Global }        from '@nestjs/common'
import { Module }        from '@nestjs/common'

import { BusModule }     from '@monstrs/nestjs-bus'
import { LoggerModule }  from '@monstrs/nestjs-logger'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Activity }      from './entities/index.js'
import { Counter }       from './entities/index.js'
import { View }          from './entities/index.js'
import config            from './config.js'

const feature = TypeOrmModule.forFeature([Counter, View, Activity])

@Global()
@Module({
  imports: [
    LoggerModule,
    feature.module,
    TypeOrmModule.forRoot(config),
    BusModule.forRabbitMq({
      queueName: 'hits',
      connectionString:
        process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30&frameMax=8192',
    }),
  ],
  // @ts-ignore
  providers: [...feature.providers],
  // @ts-ignore
  exports: [...feature.exports],
})
export class PersistenceModule {}
