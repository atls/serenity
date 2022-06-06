import { MapValidationErrorsInterceptor } from '@atls/nestjs-map-errors-interceptor'
import { Controller }                     from '@nestjs/common'
import { UseInterceptors }                from '@nestjs/common'
import { UsePipes }                       from '@nestjs/common'
import { ValidationPipe }                 from '@nestjs/common'
import { GrpcMethod }                     from '@nestjs/microservices'

import { AddReplyMessageCommand }         from '@collaboration/application'
import { ChangeReplyStatusCommand }       from '@collaboration/application'
import { ReplyService }                   from '@collaboration/application'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @GrpcMethod('CollaborationService', 'addReplyMessage')
  @UsePipes(new ValidationPipe({ transform: true }))
  async addReplyMessage(request: AddReplyMessageCommand) {
    const result = await this.replyService.addMessage(request)

    return {
      result,
    }
  }

  @GrpcMethod('CollaborationService', 'changeReplyStatus')
  @UsePipes(new ValidationPipe({ transform: true }))
  async changeReplyStatus(request: ChangeReplyStatusCommand) {
    const result = await this.replyService.changeStatus(request)

    return {
      result,
    }
  }
}
