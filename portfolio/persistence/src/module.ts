import { Global }                    from '@nestjs/common'
import { Module }                    from '@nestjs/common'

import { BusModule }                 from '@monstrs/nestjs-bus'
import { LoggerModule }              from '@monstrs/nestjs-logger'
import { TypeOrmModule }             from '@nestjs/typeorm'

import { Portfolio }                 from './entities/index.js'
import { PortfolioEntityRepository } from './repositories/index.js'
import config                        from './config.js'

const feature = TypeOrmModule.forFeature([Portfolio])

@Global()
@Module({
  imports: [
    LoggerModule,
    feature.module,
    TypeOrmModule.forRoot(config),
    BusModule.forRabbitMq({
      queueName: 'portfolio',
      connectionString:
        process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30&frameMax=8192',
    }),
  ],
  providers: [...feature.providers, PortfolioEntityRepository],
  exports: [...feature.exports, PortfolioEntityRepository],
})
export class PersistenceModule {}
