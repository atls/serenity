import { Global }               from '@nestjs/common'
import { Module }               from '@nestjs/common'
import { TypeOrmModule }        from '@nestjs/typeorm'

import { Activity }             from './entities/index.js'
import { Counter }              from './entities/index.js'
import { View }                 from './entities/index.js'
import { DomainEventPublisher } from './events/index.js'
import { WriteRepositoryLogger }         from './events/index.js'
import config                   from './config.js'

const feature = TypeOrmModule.forFeature([Counter, View, Activity])

@Global()
@Module({
  imports: [feature.module, TypeOrmModule.forRoot(config)],
  // @ts-ignore
  providers: [...feature.providers, WriteRepositoryLogger, DomainEventPublisher],
  // @ts-ignore
  exports: [...feature.exports],
})
export class PersistenceModule {}
