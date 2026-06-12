import { DynamicModule }      from '@nestjs/common'
import { Module }             from '@nestjs/common'

import { BUS_SYMBOLS }        from '@node-ts/bus-core'
import { MemoryQueue }        from '@node-ts/bus-core/dist/transport/memory-queue.js'
import { RabbitMqTransportConfiguration } from '@node-ts/bus-rabbitmq'
import { RabbitMqTransport }  from '@node-ts/bus-rabbitmq/dist/rabbitmq-transport.js'
import { connect }            from 'amqplib'

import { BusCoreModule }      from './core.module.js'
import { Logger }             from './logger.js'

@Module({})
export class BusModule {
  static forMemory(): DynamicModule {
    const transportProvider = {
      provide: BUS_SYMBOLS.Transport,
      useFactory: (logger: Logger) => new MemoryQueue(logger),
      inject: [Logger],
    }

    return {
      module: BusModule,
      imports: [BusCoreModule.forRoot(transportProvider)],
    }
  }

  static forRabbitMq(configuration: RabbitMqTransportConfiguration): DynamicModule {
    const connectionFactory = () => connect(configuration.connectionString)
    const transportProvider = {
      provide: BUS_SYMBOLS.Transport,
      useFactory: (logger: Logger) => new RabbitMqTransport(connectionFactory, configuration, logger),
      inject: [Logger],
    }

    return {
      module: BusModule,
      imports: [BusCoreModule.forRoot(transportProvider)],
    }
  }
}
