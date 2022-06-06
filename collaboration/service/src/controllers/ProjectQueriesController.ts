import { Controller }            from '@nestjs/common'
import { GrpcMethod }            from '@nestjs/microservices'

import { ProjectQueriesService } from '@collaboration/application'

@Controller()
export class ProjectQueriesController {
  constructor(private readonly projectService: ProjectQueriesService) {}

  @GrpcMethod('CollaborationService', 'getProjects')
  getProjects({ filters, pager }) {
    return this.projectService.findAll(pager, filters)
  }
}
