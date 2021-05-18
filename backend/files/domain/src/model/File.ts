/* eslint-disable class-methods-use-this */
import { AggregateRootProperties } from '@node-ts/ddd-types'

import { AggregateRoot }           from '@node-ts/ddd'

import { FileCreated }             from '../events'

export interface FileProperties extends AggregateRootProperties {
  type: string

  name: string

  url: string
}

export class File extends AggregateRoot implements FileProperties {
  type: string

  name: string

  url: string

  static create(id: string, type: string, name: string, url: string): File {
    const file = new File(id)

    file.when(new FileCreated(id, type, name, url))

    return file
  }

  protected whenFileCreated(event: FileCreated): void {
    this.type = event.type
    this.name = event.name
    this.url = event.url
  }
}
