import { Injectable } from '@nestjs/common'

@Injectable()
export class DomainEventPublisher {
  publish(): Promise<void> {
    return Promise.resolve()
  }
}
