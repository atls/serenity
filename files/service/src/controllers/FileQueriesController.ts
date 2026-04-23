import { Controller }         from '@nestjs/common'

import { FileQueriesService } from '@files/application'
import { GrpcMethod }         from '@nestjs/microservices'

@Controller()
export class FileQueriesController {
  constructor(private readonly fileService: FileQueriesService) {}

  @GrpcMethod('FilesService', 'getFiles')
  getFiles({ filters }) {
    return this.fileService.findAll(filters)
  }
}
