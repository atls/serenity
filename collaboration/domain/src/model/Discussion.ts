import uuid                  from 'uuid'

import { DiscussionCreated } from '../events/index.js'
import { AggregateRoot }     from './AggregateRoot.js'
import { Message }           from './Message.js'

export class Discussion extends AggregateRoot {
  specialistId: string

  customerId: string

  static create(specialistId: string, customerId: string) {
    const discussion = new Discussion(uuid())

    discussion.when(new DiscussionCreated(discussion.id, specialistId, customerId))

    return discussion
  }

  message(authorId: string, content: string): Message {
    return new Message(uuid(), this.id, authorId, content)
  }

  protected whenDiscussionCreated(event: DiscussionCreated): void {
    this.specialistId = event.specialistId
    this.customerId = event.customerId
  }
}
