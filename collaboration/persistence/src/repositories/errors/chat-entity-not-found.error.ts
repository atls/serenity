export class ChatEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`ChatEntity with id ${id} was not found`)
    this.name = 'ChatEntityNotFoundError'
  }
}
