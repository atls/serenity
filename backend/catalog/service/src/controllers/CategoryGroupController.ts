import { MapValidationErrorsInterceptor } from '@monstrs/nestjs-map-errors-interceptor'
import { Controller }                     from '@nestjs/common'
import { UseInterceptors }                from '@nestjs/common'
import { UsePipes }                       from '@nestjs/common'
import { ValidationPipe }                 from '@nestjs/common'
import { GrpcMethod }                     from '@nestjs/microservices'

import { CategoryGroupService }           from '@catalog/application'
import { CreateCategoryGroupCommand }     from '@catalog/application'
import { DeleteCategoryGroupCommand }     from '@catalog/application'
import { UpdateCategoryGroupCommand }     from '@catalog/application'

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
