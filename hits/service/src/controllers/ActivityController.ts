import { MapValidationErrorsInterceptor } from '@atls/nestjs-map-errors-interceptor'
import { Controller }                     from '@nestjs/common'
import { UseInterceptors }                from '@nestjs/common'
import { UsePipes }                       from '@nestjs/common'
import { ValidationPipe }                 from '@nestjs/common'
import { GrpcMethod }                     from '@nestjs/microservices'

import { TrackActivityService }           from '@hits/commands'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class ActivityController {
  constructor(private readonly activityService: TrackActivityService) {}

  @GrpcMethod('HitsService', 'trackActivity')
  @UsePipes(new ValidationPipe({ transform: true }))
  async trackActivity({ id }) {
    const result = await this.activityService.track(id)

    return {
      result,
    }
  }
}
