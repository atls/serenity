import { Injectable } from '@nestjs/common'

@Injectable()
export class DomainEventPublisher {
  async publish(): Promise<void> {
    return undefined
  }
}
