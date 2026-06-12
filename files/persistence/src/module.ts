import { Global }                 from '@nestjs/common'
import { Module }                 from '@nestjs/common'

import { BusModule }              from '@serenity/nestjs-bus'
import { LoggerModule }           from '@serenity/nestjs-bus'
import { TypeOrmModule }          from '@nestjs/typeorm'

import { File }                   from './entities/index.js'
import { Upload }                 from './entities/index.js'
import { FileEntityRepository }   from './repositories/index.js'
import { UploadEntityRepository } from './repositories/index.js'
import config                     from './config.js'

const feature = TypeOrmModule.forFeature([Upload, File])

@Global()
@Module({
  imports: [
    LoggerModule,
    feature.module,
    TypeOrmModule.forRoot(config),
    BusModule.forRabbitMq({
      queueName: 'files',
      connectionString:
        process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30&frameMax=8192',
    }),
  ],
  // @ts-ignore
  providers: [...feature.providers, UploadEntityRepository, FileEntityRepository],
  // @ts-ignore
  exports: [...feature.exports, UploadEntityRepository, FileEntityRepository],
})
export class PersistenceModule {}
