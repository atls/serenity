import { BusModule }                                 from '@monstrs/nestjs-bus'

import { ApplicationModule, IsEntityConstraint }     from '@identity/application'
import { PersistenceModule }                         from '@identity/persistence'
import { Module }                                    from '@nestjs/common'

import { IdentityController, UserQueriesController } from './controllers'

@Module({
  imports: [
    BusModule.forRabbitMq({
      queueName: 'identity',
      connectionString: process.env.BUS_URL || 'amqp://user:password@rabbitmq/?heartbeat=30',
    }),
    PersistenceModule,
    ApplicationModule,
  ],
  providers: [IsEntityConstraint],
  controllers: [IdentityController, UserQueriesController],
})
export class ServiceModule {}
