import { Controller }                  from '@nestjs/common'

import { CategoryGroupQueriesService } from '@catalog/application'
import { GrpcMethod }                  from '@nestjs/microservices'

@Controller()
export class CategoryGroupQueriesController {
  constructor(private readonly categoryGroupService: CategoryGroupQueriesService) {}

  @GrpcMethod('CatalogService', 'getCategoryGroups')
  getCategoryGroups({ filters }) {
    return this.categoryGroupService.findAll(filters)
  }
}
