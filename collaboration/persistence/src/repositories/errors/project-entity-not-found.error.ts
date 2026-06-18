export class ProjectEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`ProjectEntity with id ${id} was not found`)
    this.name = 'ProjectEntityNotFoundError'
  }
}
