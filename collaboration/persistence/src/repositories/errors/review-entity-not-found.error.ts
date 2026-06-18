export class ReviewEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`ReviewEntity with id ${id} was not found`)
    this.name = 'ReviewEntityNotFoundError'
  }
}
