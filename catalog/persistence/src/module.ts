import { Global }                        from '@nestjs/common'
import { Module }                        from '@nestjs/common'

import { BusModule }                     from '@monstrs/nestjs-bus'
import { LoggerModule }                  from '@monstrs/nestjs-logger'
import { TypeOrmModule }                 from '@nestjs/typeorm'

import { Category }                      from './entities/index.js'
import { CategoryGroup }                 from './entities/index.js'
import { CategoryEntityRepository }      from './repositories/index.js'
import { CategoryGroupEntityRepository } from './repositories/index.js'
import config                            from './config.js'

const feature = TypeOrmModule.forFeature([CategoryGroup, Category])

@Global()
@Module({
  imports: [
    LoggerModule,
    feature.module,
    TypeOrmModule.forRoot(config),
    BusModule.forRabbitMq({
      queueName: 'catalog',
      connectionString:
        process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30&frameMax=8192',
    }),
  ],
  // @ts-ignore
  providers: [...feature.providers, CategoryGroupEntityRepository, CategoryEntityRepository],
  // @ts-ignore
  exports: [...feature.exports, CategoryGroupEntityRepository, CategoryEntityRepository],
})
export class PersistenceModule {}
