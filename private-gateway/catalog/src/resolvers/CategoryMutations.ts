import { Injectable }             from '@nestjs/common'
import { OnModuleInit }           from '@nestjs/common'
import { ValidationPipe }         from '@nestjs/common'

import { Args }                   from '@nestjs/graphql'
import { Mutation }               from '@nestjs/graphql'
import { Client }                 from '@nestjs/microservices'
import { ClientGrpc }             from '@nestjs/microservices'
import { clientOptions }          from '@protos/catalog'
import { catalog }                from '@protos/interfaces'

import { CreateCategoryInput }    from '../inputs/index.js'
import { DeleteCategoryInput }    from '../inputs/index.js'
import { UpdateCategoryInput }    from '../inputs/index.js'
import { CreateCategoryResponse } from '../types/index.js'
import { DeleteCategoryResponse } from '../types/index.js'
import { UpdateCategoryResponse } from '../types/index.js'

@Injectable()
export class CategoryMutations implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private catalogService: catalog.CatalogService

  onModuleInit() {
    this.catalogService = this.client.getService<catalog.CatalogService>('CatalogService')
  }

  @Mutation((returns) => CreateCategoryResponse)
  createCategory(
    @Args('input', new ValidationPipe({ transform: true }))
    input: CreateCategoryInput
  ) {
    return this.catalogService.createCategory(input)
  }

  @Mutation((returns) => UpdateCategoryResponse)
  updateCategory(
    @Args('input', new ValidationPipe({ transform: true }))
    input: UpdateCategoryInput
  ) {
    return this.catalogService.updateCategory(input)
  }

  @Mutation((returns) => DeleteCategoryResponse)
  deleteCategory(
    @Args('input', new ValidationPipe({ transform: true }))
    input: DeleteCategoryInput
  ) {
    return this.catalogService.deleteCategory(input)
  }
}
