import { Global }                        from '@nestjs/common'
import { Module }                        from '@nestjs/common'
import { TypeOrmModule }                 from '@nestjs/typeorm'

import { Category }                      from './entities/index.js'
import { CategoryGroup }                 from './entities/index.js'
import { DomainEventPublisher }          from './events/index.js'
import { WriteRepositoryLogger }                  from './events/index.js'
import { CategoryEntityRepository }      from './repositories/index.js'
import { CategoryGroupEntityRepository } from './repositories/index.js'
import config                            from './config.js'

const feature = TypeOrmModule.forFeature([CategoryGroup, Category])

@Global()
@Module({
  imports: [feature.module, TypeOrmModule.forRoot(config)],
  // @ts-ignore
  providers: [
    ...feature.providers,
    WriteRepositoryLogger,
    DomainEventPublisher,
    CategoryGroupEntityRepository,
    CategoryEntityRepository,
  ],
  // @ts-ignore
  exports: [...feature.exports, CategoryGroupEntityRepository, CategoryEntityRepository],
})
export class PersistenceModule {}
