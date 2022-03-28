import { LoggerModule }           from '@monstrs/nestjs-logger'
import { BusModule }              from '@monstrs/nestjs-bus'
import { Global }                 from '@nestjs/common'
import { Module }                 from '@nestjs/common'
import { TypeOrmModule }          from '@nestjs/typeorm'

import config                     from './config'
import { File }                   from './entities'
import { Upload }                 from './entities'
import { FileEntityRepository }   from './repositories'
import { UploadEntityRepository } from './repositories'

const feature = TypeOrmModule.forFeature([Upload, File])

@Global()
@Module({
  imports: [
    LoggerModule,
    feature.module,
    TypeOrmModule.forRoot(config),
    BusModule.forRabbitMq({
      queueName: 'files',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
  ],
  // @ts-ignore
  providers: [...feature.providers, UploadEntityRepository, FileEntityRepository],
  // @ts-ignore
  exports: [...feature.exports, UploadEntityRepository, FileEntityRepository],
})
export class PersistenceModule {}
