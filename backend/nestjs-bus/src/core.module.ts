import { DynamicModule }       from '@nestjs/common'
import { Global }              from '@nestjs/common'
import { Inject }              from '@nestjs/common'
import { Module }              from '@nestjs/common'
import { OnApplicationBootstrap } from '@nestjs/common'
import { OnModuleDestroy }     from '@nestjs/common'
import { OnModuleInit }        from '@nestjs/common'
import { ModuleRef }           from '@nestjs/core'

import { ApplicationBootstrap } from '@node-ts/bus-core'
import { BUS_SYMBOLS }          from '@node-ts/bus-core'
import { BUS_INTERNAL_SYMBOLS } from '@node-ts/bus-core/dist/bus-symbols.js'
import { MessageAttributes }    from '@node-ts/bus-messages'
import { Container }            from 'inversify'

import { Bus }                  from './bus.js'
import { HandlerRegistry }      from './handler/index.js'
import { Logger }               from './logger.js'
import { LoggerModule }         from './logger.js'
import { ExplorerService }      from './services/index.js'

@Global()
@Module({})
export class BusCoreModule implements OnModuleInit, OnModuleDestroy, OnApplicationBootstrap {
  @Inject(ApplicationBootstrap)
  private readonly applicationBootstrap!: ApplicationBootstrap

  @Inject(Bus)
  private readonly bus!: Bus

  constructor(private readonly explorerService: ExplorerService) {}

  static forRoot(transportProvider: any): DynamicModule {
    const messageHandlingContextProvider = {
      provide: BUS_SYMBOLS.MessageHandlingContext,
      useValue: new MessageAttributes(),
    }

    const handlerRegistryProvider = {
      provide: HandlerRegistry,
      useFactory: (logger: Logger, moduleRef: ModuleRef) => new HandlerRegistry(logger, moduleRef),
      inject: [Logger, ModuleRef],
    }

    const busProvider = {
      provide: Bus,
      useFactory: (transport: any, logger: Logger, handlerRegistry: HandlerRegistry, messageHandlingContext: any) =>
        new Bus(transport, logger, handlerRegistry, messageHandlingContext),
      inject: [BUS_SYMBOLS.Transport, Logger, HandlerRegistry, BUS_SYMBOLS.MessageHandlingContext],
    }

    const applicationBootstrapProvider = {
      provide: ApplicationBootstrap,
      useFactory: (bus: Bus, transport: any, handlerRegistry: HandlerRegistry, logger: Logger) =>
        new ApplicationBootstrap(bus, transport, handlerRegistry, logger),
      inject: [Bus, BUS_SYMBOLS.Transport, HandlerRegistry, Logger],
    }

    return {
      module: BusCoreModule,
      imports: [LoggerModule],
      providers: [
        ExplorerService,
        messageHandlingContextProvider,
        handlerRegistryProvider,
        transportProvider,
        busProvider,
        applicationBootstrapProvider,
      ],
      exports: [busProvider, applicationBootstrapProvider, handlerRegistryProvider],
    }
  }

  async onModuleInit(): Promise<void> {
    const { events } = this.explorerService.explore()

    events.forEach((event) => {
      this.applicationBootstrap.registerHandler(event)
    })
  }

  async onApplicationBootstrap(): Promise<void> {
    const container = new Container()

    container.bind(BUS_INTERNAL_SYMBOLS.SessionScopeBinder).toConstantValue((bind) => {
      bind(BUS_SYMBOLS.Bus).toConstantValue(this.bus)
    })

    await this.applicationBootstrap.initialize(container)
  }

  async onModuleDestroy(): Promise<void> {
    await this.applicationBootstrap.dispose()
  }
}
