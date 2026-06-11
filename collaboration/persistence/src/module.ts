import { Global }                     from '@nestjs/common'
import { Module }                     from '@nestjs/common'

import { BusModule }                  from '@monstrs/nestjs-bus'
import { LoggerModule }               from '@monstrs/nestjs-logger'
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

@Global()
@Module({
  imports: [
    LoggerModule,
    feature.module,
    TypeOrmModule.forRoot(config),
    BusModule.forRabbitMq({
      queueName: 'catalog',
      connectionString:
        process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30&frameMax=8192',
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
