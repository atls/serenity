export class ReplyEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`ReplyEntity with id ${id} was not found`)
    this.name = 'ReplyEntityNotFoundError'
  }
}
