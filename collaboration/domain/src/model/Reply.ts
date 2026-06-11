import uuid                   from 'uuid/v4.js'

import { AggregateRoot }      from '@node-ts/ddd'

import { ReplyCreated }       from '../events/index.js'
import { ReplyStatusChanged } from '../events/index.js'
import { ReplyStatus }        from './ReplyStatus.js'

export class Reply extends AggregateRoot {
  projectId: string

  specialistId: string

  discussionId: string

  status: ReplyStatus = ReplyStatus.new

  static create(projectId: string, specialistId: string, discussionId: string) {
    const reply = new Reply(uuid())

    reply.when(new ReplyCreated(reply.id, projectId, specialistId, discussionId))

    return reply
  }

  changeStatus(status: ReplyStatus) {
    this.when(new ReplyStatusChanged(this.id, status))
  }

  protected whenReplyCreated(event: ReplyCreated): void {
    this.projectId = event.projectId
    this.specialistId = event.specialistId
    this.discussionId = event.discussionId
  }

  protected whenReplyStatusChanged(event: ReplyStatusChanged): void {
    this.status = event.status
  }
}
