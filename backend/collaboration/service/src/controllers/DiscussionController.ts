import { Controller, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common'
import { GrpcMethod }                                            from '@nestjs/microservices'

import { AddDiscussionMessageCommand, DiscussionService }        from '@collaboration/application'
import { MapValidationErrorsInterceptor }                        from '@monstrs/nestjs-map-errors-interceptor'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class DiscussionController {
  constructor(private readonly discussionService: DiscussionService) {}

  @GrpcMethod('CollaborationService', 'addDiscussionMessage')
  @UsePipes(new ValidationPipe({ transform: true }))
  async addDiscussionMessage(request: AddDiscussionMessageCommand) {
    const result = await this.discussionService.addMessage(request)

    return {
      result,
    }
  }
}
