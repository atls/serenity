export class ChatEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`ChatEntity with id ${id} was not found`)
    this.name = 'ChatEntityNotFoundError'
  }
}

export class DiscussionEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`DiscussionEntity with id ${id} was not found`)
    this.name = 'DiscussionEntityNotFoundError'
  }
}

export class MessageEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`MessageEntity with id ${id} was not found`)
    this.name = 'MessageEntityNotFoundError'
  }
}

export class ProjectEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`ProjectEntity with id ${id} was not found`)
    this.name = 'ProjectEntityNotFoundError'
  }
}

export class ReplyEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`ReplyEntity with id ${id} was not found`)
    this.name = 'ReplyEntityNotFoundError'
  }
}

export class ReviewEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`ReviewEntity with id ${id} was not found`)
    this.name = 'ReviewEntityNotFoundError'
  }
}
