import { Controller }             from '@nestjs/common'
import { GrpcMethod }             from '@nestjs/microservices'

import { CategoryQueriesService } from '@catalog/application'

@Controller()
export class CategoryQueriesController {
  constructor(private readonly categoryService: CategoryQueriesService) {}

  @GrpcMethod('CatalogService', 'getCategories')
  getCategories({ filters }) {
    return this.categoryService.findAll(filters)
  }
}
