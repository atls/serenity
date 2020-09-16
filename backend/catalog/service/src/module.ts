import { BusModule }         from '@monstrs/nestjs-bus'
import { Module }            from '@nestjs/common'

import { ApplicationModule } from '@catalog/application'
import { PersistenceModule } from '@catalog/persistence'

import {
  CategoryController,
  CategoryGroupController,
  CategoryGroupQueriesController,
  CategoryQueriesController,
} from './controllers'
import { HealthModule }      from './health'

@Module({
  imports: [
    HealthModule,
    BusModule.forRabbitMq({
      queueName: 'catalog',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
    PersistenceModule,
    ApplicationModule,
  ],
  controllers: [
    CategoryGroupController,
    CategoryController,
    CategoryGroupQueriesController,
    CategoryQueriesController,
  ],
})
export class ServiceModule {}
