export class UploadEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`UploadEntity with id ${id} was not found`)
    this.name = 'UploadEntityNotFoundError'
  }
}
