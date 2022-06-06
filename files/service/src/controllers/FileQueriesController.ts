import { Controller }         from '@nestjs/common'
import { GrpcMethod }         from '@nestjs/microservices'

import { FileQueriesService } from '@files/application'

@Controller()
export class FileQueriesController {
  constructor(private readonly fileService: FileQueriesService) {}

  @GrpcMethod('FilesService', 'getFiles')
  getFiles({ filters }) {
    return this.fileService.findAll(filters)
  }
}
