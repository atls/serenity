export class DiscussionEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`DiscussionEntity with id ${id} was not found`)
    this.name = 'DiscussionEntityNotFoundError'
  }
}
