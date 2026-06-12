import { Injectable }           from '@nestjs/common'
import { Logger as NestLogger } from '@nestjs/common'

@Injectable()
export class WriteRepositoryLogger {
  private readonly logger = new NestLogger('WriteRepository')

  debug(message: string, _data?: unknown): void {
    this.logger.debug(message)
  }
}
