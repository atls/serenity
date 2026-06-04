import { Controller }            from '@nestjs/common'

import { ProjectQueriesService } from '@collaboration/application'
import { GrpcMethod }            from '@nestjs/microservices'

@Controller()
export class ProjectQueriesController {
  constructor(private readonly projectService: ProjectQueriesService) {}

  @GrpcMethod('CollaborationService', 'getProjects')
  getProjects({ filters, pager }) {
    return this.projectService.findAll(pager, filters)
  }
}
