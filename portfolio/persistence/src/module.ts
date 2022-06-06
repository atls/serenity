import { BusModule }                 from '@monstrs/nestjs-bus'
import { LoggerModule }              from '@monstrs/nestjs-logger'
import { Global }                    from '@nestjs/common'
import { Module }                    from '@nestjs/common'
import { TypeOrmModule }             from '@nestjs/typeorm'

import config                        from './config'
import { Portfolio }                 from './entities'
import { PortfolioEntityRepository } from './repositories'

const feature = TypeOrmModule.forFeature([Portfolio])

@Global()
@Module({
  imports: [
    LoggerModule,
    feature.module,
    TypeOrmModule.forRoot(config),
    BusModule.forRabbitMq({
      queueName: 'portfolio',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
  ],
  providers: [...feature.providers, PortfolioEntityRepository],
  exports: [...feature.exports, PortfolioEntityRepository],
})
export class PersistenceModule {}
