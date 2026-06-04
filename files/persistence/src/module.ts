import { Global }                 from '@nestjs/common'
import { Module }                 from '@nestjs/common'

import { BusModule }              from '@monstrs/nestjs-bus'
import { LoggerModule }           from '@monstrs/nestjs-logger'
import { TypeOrmModule }          from '@nestjs/typeorm'

import { File }                   from './entities'
import { Upload }                 from './entities'
import { FileEntityRepository }   from './repositories'
import { UploadEntityRepository } from './repositories'
import config                     from './config'

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
