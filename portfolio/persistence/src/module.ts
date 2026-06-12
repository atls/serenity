import { Global }                    from '@nestjs/common'
import { Module }                    from '@nestjs/common'
import { TypeOrmModule }             from '@nestjs/typeorm'

import { Portfolio }                 from './entities/index.js'
import { DomainEventPublisher }      from './events/index.js'
import { WriteRepositoryLogger }              from './events/index.js'
import { PortfolioEntityRepository } from './repositories/index.js'
import config                        from './config.js'

const feature = TypeOrmModule.forFeature([Portfolio])

@Global()
@Module({
  imports: [feature.module, TypeOrmModule.forRoot(config)],
  providers: [...feature.providers, WriteRepositoryLogger, DomainEventPublisher, PortfolioEntityRepository],
  exports: [...feature.exports, PortfolioEntityRepository],
})
export class PersistenceModule {}
