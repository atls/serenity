import { Injectable }       from '@nestjs/common'
import { OnModuleInit }     from '@nestjs/common'
import { map }              from 'rxjs/operators'
import DataLoader           from 'dataloader'

import { NestDataLoader }   from '@atls/nestjs-dataloader'
import { Client }           from '@nestjs/microservices'
import { ClientGrpc }       from '@nestjs/microservices'
import { clientOptions }    from '@protos/files'
import { files }            from '@protos/interfaces'

import { orderResultByKey } from './orderResultByKey.js'

@Injectable()
export class FilesLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private filesService: files.FilesService

  onModuleInit() {
    this.filesService = this.client.getService<files.FilesService>('FilesService')
  }

  getFiles(id: string[]) {
    return this.filesService
      .getFiles({ filters: { id } })
      .pipe(map((data) => orderResultByKey(id, data.rows)))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string[], files.File[]>(this.getFiles.bind(this))
  }
}
