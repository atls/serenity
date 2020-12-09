import { Controller }      from '@nestjs/common'
import { GrpcMethod }      from '@nestjs/microservices'

import { ActivityService } from '@hits/queries'

@Controller()
export class ActivityQueriesController {
  constructor(private readonly activityService: ActivityService) {}

  @GrpcMethod('HitsService', 'getActivities')
  getActivities({ filters }) {
    return this.activityService.findAll(filters)
  }
}
