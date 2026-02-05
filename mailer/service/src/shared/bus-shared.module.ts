import { BusModule } from '@monstrs/nestjs-bus'
import { Global, Module } from '@nestjs/common'

const sharedBusModule = BusModule.forRabbitMq({
  queueName: 'shared',
  connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
})

@Global()
@Module({
  imports: [sharedBusModule],
  exports: [sharedBusModule],
})
export class BusSharedModule {}
