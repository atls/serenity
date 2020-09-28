import { LoggerModule }                                 from '@monstrs/nestjs-logger'
import { Global, Module }                               from '@nestjs/common'
import { TypeOrmModule }                                from '@nestjs/typeorm'

import config                                           from './config'
import { File, Upload }                                 from './entities'
import { FileEntityRepository, UploadEntityRepository } from './repositories'

const feature = TypeOrmModule.forFeature([Upload, File])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  providers: [...feature.providers, UploadEntityRepository, FileEntityRepository],
  exports: [...feature.exports, UploadEntityRepository, FileEntityRepository],
})
export class PersistenceModule {}
