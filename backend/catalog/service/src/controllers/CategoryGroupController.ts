import { Controller, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common'
import { GrpcMethod }                                            from '@nestjs/microservices'

import {
  CategoryGroupService,
  CreateCategoryGroupCommand,
  DeleteCategoryGroupCommand,
  UpdateCategoryGroupCommand,
} from '@catalog/application'
import { MapValidationErrorsInterceptor }                        from '@monstrs/nestjs-map-errors-interceptor'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class CategoryGroupController {
  constructor(private readonly categoryGroupService: CategoryGroupService) {}

  @GrpcMethod('CatalogService', 'createCategoryGroup')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCategoryGroup(request: CreateCategoryGroupCommand) {
    const result = await this.categoryGroupService.create(request)

    return {
      result,
    }
  }

  @GrpcMethod('CatalogService', 'updateCategoryGroup')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateCategoryGroup(request: UpdateCategoryGroupCommand) {
    const result = await this.categoryGroupService.update(request)

    return {
      result,
    }
  }

  @GrpcMethod('CatalogService', 'deleteCategoryGroup')
  @UsePipes(new ValidationPipe({ transform: true }))
  async deleteCategoryGroup(request: DeleteCategoryGroupCommand) {
    const result = await this.categoryGroupService.delete(request)

    return {
      result,
    }
  }
}
