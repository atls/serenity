import { LoggerModule }                                            from '@monstrs/nestjs-logger'
import { Global, Module }                                          from '@nestjs/common'
import { TypeOrmModule }                                           from '@nestjs/typeorm'

import config                                                      from './config'
import { Category, CategoryGroup }                                 from './entities'
import { CategoryEntityRepository, CategoryGroupEntityRepository } from './repositories'

const feature = TypeOrmModule.forFeature([CategoryGroup, Category])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  providers: [...feature.providers, CategoryGroupEntityRepository, CategoryEntityRepository],
  exports: [...feature.exports, CategoryGroupEntityRepository, CategoryEntityRepository],
})
export class PersistenceModule {}
