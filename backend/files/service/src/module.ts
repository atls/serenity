import { BusModule }             from '@monstrs/nestjs-bus'
import { Module }                from '@nestjs/common'

import { ApplicationModule }     from '@files/application'
import { PersistenceModule }     from '@files/persistence'

import { FileQueriesController } from './controllers'
import { UploadController }      from './controllers'

@Module({
  imports: [
    BusModule.forRabbitMq({
      queueName: 'files',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
    PersistenceModule,
    ApplicationModule,
  ],
  controllers: [FileQueriesController, UploadController],
})
export class ServiceModule {}
