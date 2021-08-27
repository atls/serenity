import { BusModule }         from '@atls/nestjs-bus'
import { Module }            from '@nestjs/common'

import { ApplicationModule } from '@collaboration/application'
import { PersistenceModule } from '@collaboration/persistence'

import {
  CustomerController,
  CustomerQueriesController,
  DiscussionController,
  DiscussionQueriesController,
  ProjectController,
  ProjectQueriesController,
  ReplyController,
  ReplyQueriesController,
  ReviewQueriesController,
  SpecialistController,
  SpecialistQueriesController,
} from './controllers'

@Module({
  imports: [
    BusModule.forRabbitMq({
      queueName: 'collaboration',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
    PersistenceModule,
    ApplicationModule,
  ],
  controllers: [
    CustomerQueriesController,
    SpecialistQueriesController,
    SpecialistController,
    CustomerController,
    ProjectQueriesController,
    ProjectController,
    ReplyQueriesController,
    ReplyController,
    ReviewQueriesController,
    DiscussionController,
    DiscussionQueriesController,
  ],
})
export class ServiceModule {}
