import { BusModule }                                 from '@monstrs/nestjs-bus'
import { Module }                                    from '@nestjs/common'

import { ApplicationModule, IsEntityConstraint }     from '@identity/application'
import { PersistenceModule }                         from '@identity/persistence'

import { IdentityController, UserQueriesController } from './controllers'

@Module({
  imports: [
    BusModule.forRabbitMq({
      queueName: 'identity',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
    PersistenceModule,
    ApplicationModule,
  ],
  providers: [IsEntityConstraint],
  controllers: [IdentityController, UserQueriesController],
})
export class ServiceModule {}
