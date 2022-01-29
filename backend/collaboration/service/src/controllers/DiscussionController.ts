import { MapValidationErrorsInterceptor } from '@atls/nestjs-map-errors-interceptor'
import { Controller }                     from '@nestjs/common'
import { UseInterceptors }                from '@nestjs/common'
import { UsePipes }                       from '@nestjs/common'
import { ValidationPipe }                 from '@nestjs/common'
import { GrpcMethod }                     from '@nestjs/microservices'

import { AddDiscussionMessageCommand }    from '@collaboration/application'
import { DiscussionService }              from '@collaboration/application'

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
