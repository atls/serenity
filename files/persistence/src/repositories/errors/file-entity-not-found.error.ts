export class FileEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`FileEntity with id ${id} was not found`)
    this.name = 'FileEntityNotFoundError'
  }
}
