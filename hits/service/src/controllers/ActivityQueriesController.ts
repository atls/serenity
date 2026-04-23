import { Controller }      from '@nestjs/common'

import { ActivityService } from '@hits/queries'
import { GrpcMethod }      from '@nestjs/microservices'

@Controller()
export class ActivityQueriesController {
  constructor(private readonly activityService: ActivityService) {}

  @GrpcMethod('HitsService', 'getActivities')
  getActivities({ filters }) {
    return this.activityService.findAll(filters)
  }
}
