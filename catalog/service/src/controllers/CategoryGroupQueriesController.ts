import { Controller }                  from '@nestjs/common'
import { GrpcMethod }                  from '@nestjs/microservices'

import { CategoryGroupQueriesService } from '@catalog/application'

@Controller()
export class CategoryGroupQueriesController {
  constructor(private readonly categoryGroupService: CategoryGroupQueriesService) {}

  @GrpcMethod('CatalogService', 'getCategoryGroups')
  getCategoryGroups({ filters }) {
    return this.categoryGroupService.findAll(filters)
  }
}
