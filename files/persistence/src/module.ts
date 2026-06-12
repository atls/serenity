import { Global }                 from '@nestjs/common'
import { Module }                 from '@nestjs/common'
import { TypeOrmModule }          from '@nestjs/typeorm'

import { File }                   from './entities/index.js'
import { Upload }                 from './entities/index.js'
import { DomainEventPublisher }   from './events/index.js'
import { DomainLogger }           from './events/index.js'
import { FileEntityRepository }   from './repositories/index.js'
import { UploadEntityRepository } from './repositories/index.js'
import config                     from './config.js'

const feature = TypeOrmModule.forFeature([Upload, File])

@Global()
@Module({
  imports: [feature.module, TypeOrmModule.forRoot(config)],
  // @ts-ignore
  providers: [
    ...feature.providers,
    DomainLogger,
    DomainEventPublisher,
    UploadEntityRepository,
    FileEntityRepository,
  ],
  // @ts-ignore
  exports: [...feature.exports, UploadEntityRepository, FileEntityRepository],
})
export class PersistenceModule {}
