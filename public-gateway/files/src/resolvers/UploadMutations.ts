import { Injectable }            from '@nestjs/common'
import { OnModuleInit }          from '@nestjs/common'

import { Args }                  from '@nestjs/graphql'
import { Mutation }              from '@nestjs/graphql'
import { Client }                from '@nestjs/microservices'
import { ClientGrpc }            from '@nestjs/microservices'
import { clientOptions }         from '@protos/files'
import { files }                 from '@protos/interfaces'

import { ConfirmUploadInput }    from '../inputs/index.js'
import { CreateUploadInput }     from '../inputs/index.js'
import { ConfirmUploadResponse } from '../types/index.js'
import { CreateUploadResponse }  from '../types/index.js'

@Injectable()
export class UploadMutations implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private fileService: files.FilesService

  onModuleInit() {
    this.fileService = this.client.getService<files.FilesService>('FilesService')
  }

  @Mutation((returns) => CreateUploadResponse)
  createUpload(
    @Args('input')
    input: CreateUploadInput
  ) {
    return this.fileService.createUpload(input)
  }

  @Mutation((returns) => ConfirmUploadResponse)
  confirmUpload(
    @Args('input')
    input: ConfirmUploadInput
  ) {
    return this.fileService.confirmUpload(input)
  }
}
