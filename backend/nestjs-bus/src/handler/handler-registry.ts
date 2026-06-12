import { ModuleRef }        from '@nestjs/core'

import { Handler }          from '@node-ts/bus-core'
import { ClassConstructor } from '@node-ts/bus-core'
import { isClassConstructor } from '@node-ts/bus-core'
import { Message }          from '@node-ts/bus-messages'
import type { Logger as NodeLogger } from '@node-ts/logger-core'
import { inject }           from 'inversify'
import { injectable }       from 'inversify'
import { decorate }         from 'inversify'
import { Container }        from 'inversify'
import { interfaces }       from 'inversify'
import serializeError       from 'serialize-error'

import { Logger }           from '../logger.js'

type HandlerType = ClassConstructor<Handler<Message>> | ((context: interfaces.Context) => Handler<Message>)

interface HandlerDetails {
  symbol: symbol
  handler: HandlerType
}

interface MessageHandlerRegistration<TMessage extends Message> {
  messageType: ClassConstructor<TMessage>
  handlers: Array<HandlerDetails>
}

export interface HandlerRegistration<MessageType extends Message> {
  defaultContainer: Container
  resolveHandler(handlerContextContainer: Container): Handler<MessageType>
}

@injectable()
export class HandlerRegistry {
  private registry: Record<string, MessageHandlerRegistration<Message>> = {}

  private container!: Container

  private unhandledMessages: Array<string> = []

  constructor(
    @inject(Logger) private readonly logger: NodeLogger,
    private readonly moduleRef: ModuleRef
  ) {}

  register<TMessage extends Message>(
    messageName: string,
    symbol: symbol,
    handler: HandlerType,
    messageType: ClassConstructor<TMessage>
  ): void {
    if (!this.registry[messageName]) {
      this.registry[messageName] = {
        messageType: messageType as ClassConstructor<Message>,
        handlers: [],
      }
    }

    const handlerName = getHandlerName(handler)
    const handlerAlreadyRegistered = this.registry[messageName].handlers.some((item) => item.symbol === symbol)

    if (handlerAlreadyRegistered) {
      this.logger.warn(`Attempted to re-register a handler that's already registered`, { handlerName })
      return
    }

    if (isClassConstructor(handler)) {
      const allRegisteredHandlers = Object.keys(this.registry).flatMap((message) => this.registry[message].handlers)
      const handlerNameAlreadyRegistered = allRegisteredHandlers.some((item) => item.handler.name === handler.name)

      if (handlerNameAlreadyRegistered) {
        throw new Error(
          `Attempted to register a handler, when a handler with the same name has already been registered. ` +
            `Handlers must be registered with a unique name - "${handler.name}"`
        )
      }

      try {
        decorate(injectable(), handler)
        this.logger.trace(`Handler "${handler.name}" was missing the "injectable()" decorator. This has been added automatically`)
      } catch {}
    }

    this.registry[messageName].handlers.push({ symbol, handler })
    this.logger.info('Handler registered', {
      messageType: messageName,
      handler: handlerName,
    })
  }

  get<MessageType extends Message>(messageName: string): Array<HandlerRegistration<MessageType>> {
    if (!(messageName in this.registry)) {
      if (!this.unhandledMessages.some((message) => message === messageName)) {
        this.unhandledMessages.push(messageName)
        this.logger.warn(
          `No handlers were registered for message "${messageName}". ` +
            `This could mean that either the handlers haven't been registered with bootstrap.registerHandler(), ` +
            `or that the underlying transport is subscribed to messages that aren't handled and should be removed.`
        )
      }

      return []
    }

    return this.registry[messageName].handlers.map((handlerDetails) => ({
      defaultContainer: this.container,
      resolveHandler: (container) => {
        this.logger.debug(`Resolving handlers for ${messageName}`)

        let handler: Handler<MessageType> | null = null

        try {
          handler = this.moduleRef.get(handlerDetails.handler as any, { strict: false })
        } catch {}

        if (handler) {
          return handler
        }

        try {
          return container.get<Handler<MessageType>>(handlerDetails.symbol)
        } catch (error) {
          this.logger.error('Could not resolve handler from the IoC container.', {
            messageName,
            error: serializeError(error),
          })
          throw error
        }
      },
    }))
  }

  getMessageNames(): Array<string> {
    return Object.keys(this.registry)
  }

  getMessageConstructor<T extends Message>(messageName: string): ClassConstructor<T> | undefined {
    if (!(messageName in this.registry)) {
      return undefined
    }

    return this.registry[messageName].messageType as ClassConstructor<T>
  }

  bindHandlersToContainer(container: Container): void {
    this.container = container
    this.bindHandlers()
  }

  getHandlerId(handler: Handler<Message>): string {
    return handler.constructor.name
  }

  private bindHandlers(): void {
    Object.keys(this.registry).forEach((messageName) => {
      const messageHandler = this.registry[messageName]

      messageHandler.handlers.forEach((handlerRegistration) => {
        const handlerName = getHandlerName(handlerRegistration.handler)

        this.logger.debug('Binding handler to message', {
          messageName,
          handlerName,
        })

        if (isClassConstructor(handlerRegistration.handler)) {
          this.container.bind(handlerRegistration.symbol).to(handlerRegistration.handler).inTransientScope()
        } else {
          this.container.bind(handlerRegistration.symbol).toDynamicValue(handlerRegistration.handler).inTransientScope()
        }
      })
    })
  }
}

function getHandlerName(handler: HandlerType): string {
  return isClassConstructor(handler) ? handler.prototype.constructor.name : handler.constructor.name
}
