export class MessageEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`MessageEntity with id ${id} was not found`)
    this.name = 'MessageEntityNotFoundError'
  }
}
