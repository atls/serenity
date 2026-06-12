import { Global }                     from '@nestjs/common'
import { Module }                     from '@nestjs/common'
import { ClientsModule }              from '@nestjs/microservices'
import { Transport }                  from '@nestjs/microservices'
import { TypeOrmModule }              from '@nestjs/typeorm'

import { Chat }                       from './entities/index.js'
import { Customer }                   from './entities/index.js'
import { Discussion }                 from './entities/index.js'
import { Message }                    from './entities/index.js'
import { Project }                    from './entities/index.js'
import { ProjectId }                  from './entities/index.js'
import { Reply }                      from './entities/index.js'
import { Review }                     from './entities/index.js'
import { Specialist }                 from './entities/index.js'
import { DomainEventPublisher }       from './events/index.js'
import { WriteRepositoryLogger }               from './events/index.js'
import { SEARCH_EVENTS_CLIENT }       from './events/index.js'
import { ChatEntityRepository }       from './repositories/index.js'
import { CustomerEntityRepository }   from './repositories/index.js'
import { DiscussionEntityRepository } from './repositories/index.js'
import { MessageEntityRepository }    from './repositories/index.js'
import { ProjectEntityRepository }    from './repositories/index.js'
import { ReplyEntityRepository }      from './repositories/index.js'
import { ReviewEntityRepository }     from './repositories/index.js'
import { SpecialistEntityRepository } from './repositories/index.js'
import config                         from './config.js'

const feature = TypeOrmModule.forFeature([
  Specialist,
  Customer,
  Project,
  Message,
  Discussion,
  Reply,
  Review,
  Chat,
  ProjectId,
])

const busUrl =
  process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30&frameMax=8192'

@Global()
@Module({
  imports: [
    feature.module,
    TypeOrmModule.forRoot(config),
    ClientsModule.register([
      {
        name: SEARCH_EVENTS_CLIENT,
        transport: Transport.RMQ,
        options: {
          urls: [busUrl],
          queue: process.env.SEARCH_EVENTS_QUEUE || 'search',
        },
      },
    ]),
  ],
  providers: [
    // @ts-ignore
    ...feature.providers,
    WriteRepositoryLogger,
    DomainEventPublisher,
    SpecialistEntityRepository,
    CustomerEntityRepository,
    ProjectEntityRepository,
    MessageEntityRepository,
    DiscussionEntityRepository,
    ReplyEntityRepository,
    ReviewEntityRepository,
    ChatEntityRepository,
  ],
  exports: [
    // @ts-ignore
    ...feature.exports,
    SpecialistEntityRepository,
    CustomerEntityRepository,
    ProjectEntityRepository,
    MessageEntityRepository,
    DiscussionEntityRepository,
    ReplyEntityRepository,
    ReviewEntityRepository,
    ChatEntityRepository,
  ],
})
export class PersistenceModule {}
