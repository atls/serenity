export class CategoryEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`CategoryEntity with id ${id} was not found`)
    this.name = 'CategoryEntityNotFoundError'
  }
}
