import { LoggerModule }        from '@atlantis-lab/nestjs-logger'
import { TypeOrmModule }       from '@nestjs/typeorm'

import { Global, Module }      from '@nestjs/common'

import config                  from './config'
import { User }                from './entities'
import { UserStoreRepository } from './repositories'

const feature = TypeOrmModule.forFeature([User])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  providers: [...feature.providers, UserStoreRepository],
  exports: [...feature.exports, UserStoreRepository],
})
export class PersistenceModule {}
