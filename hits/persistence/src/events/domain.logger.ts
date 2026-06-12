import { Injectable }           from '@nestjs/common'
import { Logger as NestLogger } from '@nestjs/common'

@Injectable()
export class DomainLogger {
  private readonly logger = new NestLogger('WriteRepository')

  debug(message: string): void {
    this.logger.debug(message)
  }
}
