import { MapValidationErrorsInterceptor } from '@atls/nestjs-map-errors-interceptor'
import { Controller }                     from '@nestjs/common'
import { UseInterceptors }                from '@nestjs/common'
import { UsePipes }                       from '@nestjs/common'
import { ValidationPipe }                 from '@nestjs/common'
import { GrpcMethod }                     from '@nestjs/microservices'

import { CategoryService }                from '@catalog/application'
import { CreateCategoryCommand }          from '@catalog/application'
import { DeleteCategoryCommand }          from '@catalog/application'
import { UpdateCategoryCommand }          from '@catalog/application'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @GrpcMethod('CatalogService', 'createCategory')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createCategory(request: CreateCategoryCommand) {
    const result = await this.categoryService.create(request)

    return {
      result,
    }
  }

  @GrpcMethod('CatalogService', 'updateCategory')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateCategory(request: UpdateCategoryCommand) {
    const result = await this.categoryService.update(request)

    return {
      result,
    }
  }

  @GrpcMethod('CatalogService', 'deleteCategory')
  @UsePipes(new ValidationPipe({ transform: true }))
  async deleteCategory(request: DeleteCategoryCommand) {
    const result = await this.categoryService.delete(request)

    return {
      result,
    }
  }
}
