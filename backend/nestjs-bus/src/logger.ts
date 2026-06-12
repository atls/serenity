import { Inject }     from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { Module }     from '@nestjs/common'

import pino           from 'pino'

const PINO = 'pino'

const pinoProvider = {
  provide: PINO,
  useValue: pino({
    enabled: true,
    name: 'base',
    level: process.env.LOG_LEVEL || 'info',
    prettyPrint: process.env.NODE_ENV !== 'production',
  }),
}

@Injectable()
export class Logger {
  constructor(@Inject(PINO) private readonly pinoLogger: any = pino()) {}

  debug(message: string, data?: any): void {
    this.pinoLogger.debug(data, message)
  }

  trace(message: string, data?: any): void {
    this.pinoLogger.trace(data, message)
  }

  info(message: string, data?: any): void {
    this.pinoLogger.info(data, message)
  }

  warn(message: string, data?: any): void {
    this.pinoLogger.warn(data, message)
  }

  error(message: string, data?: any): void {
    this.pinoLogger.error(data, message)
  }

  fatal(message: string, data?: any): void {
    this.pinoLogger.fatal(data, message)
  }
}

@Module({
  providers: [pinoProvider, Logger],
  exports: [Logger],
})
export class LoggerModule {}
