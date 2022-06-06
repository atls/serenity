import { BusModule }                  from '@monstrs/nestjs-bus'
import { LoggerModule }               from '@monstrs/nestjs-logger'
import { Global }                     from '@nestjs/common'
import { Module }                     from '@nestjs/common'
import { TypeOrmModule }              from '@nestjs/typeorm'

import config                         from './config'
import { Chat }                       from './entities'
import { Customer }                   from './entities'
import { Discussion }                 from './entities'
import { Message }                    from './entities'
import { Project }                    from './entities'
import { ProjectId }                  from './entities'
import { Reply }                      from './entities'
import { Review }                     from './entities'
import { Specialist }                 from './entities'
import { ChatEntityRepository }       from './repositories'
import { CustomerEntityRepository }   from './repositories'
import { DiscussionEntityRepository } from './repositories'
import { MessageEntityRepository }    from './repositories'
import { ProjectEntityRepository }    from './repositories'
import { ReplyEntityRepository }      from './repositories'
import { ReviewEntityRepository }     from './repositories'
import { SpecialistEntityRepository } from './repositories'

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

@Global()
@Module({
  imports: [
    LoggerModule,
    feature.module,
    TypeOrmModule.forRoot(config),
    BusModule.forRabbitMq({
      queueName: 'catalog',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
  ],
  providers: [
    // @ts-ignore
    ...feature.providers,
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
