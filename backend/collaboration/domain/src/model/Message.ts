/* eslint-disable class-methods-use-this */
import { AggregateRoot } from '@node-ts/ddd'

export class Message extends AggregateRoot {
  discussionId: string

  authorId: string

  content: string

  sendDate: number

  read: boolean = false

  constructor(uuid, discussionId: string, authorId: string, content: string) {
    super(uuid)

    this.discussionId = discussionId
    this.authorId = authorId
    this.content = content
    this.sendDate = new Date().getTime()
  }
}
