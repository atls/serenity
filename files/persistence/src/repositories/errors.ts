export class FileEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`FileEntity with id ${id} was not found`)
    this.name = 'FileEntityNotFoundError'
  }
}

export class UploadEntityNotFoundError extends Error {
  constructor(id: string) {
    super(`UploadEntity with id ${id} was not found`)
    this.name = 'UploadEntityNotFoundError'
  }
}
