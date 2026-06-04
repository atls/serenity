import { Controller }             from '@nestjs/common'

import { CategoryQueriesService } from '@catalog/application'
import { GrpcMethod }             from '@nestjs/microservices'

@Controller()
export class CategoryQueriesController {
  constructor(private readonly categoryService: CategoryQueriesService) {}

  @GrpcMethod('CatalogService', 'getCategories')
  getCategories({ filters }) {
    return this.categoryService.findAll(filters)
  }
}
