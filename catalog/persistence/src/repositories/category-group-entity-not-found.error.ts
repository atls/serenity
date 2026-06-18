export class CategoryGroupEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`CategoryGroupEntity with id ${id} was not found`)
    this.name = 'CategoryGroupEntityNotFoundError'
  }
}
