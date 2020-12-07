import { Controller, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common'
import { GrpcMethod }                                            from '@nestjs/microservices'

import {
  AddReplyMessageCommand,
  ChangeReplyStatusCommand,
  ReplyService,
} from '@collaboration/application'
import { MapValidationErrorsInterceptor }                        from '@monstrs/nestjs-map-errors-interceptor'

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
