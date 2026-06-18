import { UploadField } from '../model/index.js'

export class UploadCreated {
  static readonly NAME = 'files/upload-created'

  $name = UploadCreated.NAME

  $version = 0

  constructor(
    readonly uploadId: string,
    readonly type: string,
    readonly name: string,
    readonly url: string,
    readonly fields: UploadField[]
  ) {}
}
