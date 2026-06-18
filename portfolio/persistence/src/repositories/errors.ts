export class EntityNotFoundError extends Error {
  constructor(entityName: string, id: string) {
    super(`${entityName} with id ${id} was not found`)
    this.name = 'EntityNotFoundError'
  }
}
