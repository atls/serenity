export class FileCreated {
  static readonly NAME = 'files/file-created'

  $name = FileCreated.NAME

  $version = 0

  constructor(
    readonly fileId: string,
    readonly type: string,
    readonly name: string,
    readonly url: string
  ) {}
}
