import { Controller, UseInterceptors, UsePipes, ValidationPipe }    from '@nestjs/common'
import { GrpcMethod }                                               from '@nestjs/microservices'

import { ConfirmUploadCommand, CreateUploadCommand, UploadService } from '@files/application'
import { MapValidationErrorsInterceptor }                           from '@monstrs/nestjs-map-errors-interceptor'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @GrpcMethod('FilesService', 'createUpload')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createUpload(request: CreateUploadCommand) {
    const result = await this.uploadService.create(request)

    return {
      result,
    }
  }

  @GrpcMethod('FilesService', 'confirmUpload')
  @UsePipes(new ValidationPipe({ transform: true }))
  async confirmUpload(request: ConfirmUploadCommand) {
    const result = await this.uploadService.confirm(request)

    return {
      result,
    }
  }
}
