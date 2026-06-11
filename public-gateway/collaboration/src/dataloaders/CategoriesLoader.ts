import { Injectable }       from '@nestjs/common'
import { OnModuleInit }     from '@nestjs/common'
import { map }              from 'rxjs/operators'
import DataLoader           from 'dataloader'

import { NestDataLoader }   from '@atls/nestjs-dataloader'
import { Client }           from '@nestjs/microservices'
import { ClientGrpc }       from '@nestjs/microservices'
import { clientOptions }    from '@protos/catalog'
import { catalog }          from '@protos/interfaces'

import { orderResultByKey } from './orderResultByKey.js'

@Injectable()
export class CategoriesLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private catalogService: catalog.CatalogService

  onModuleInit() {
    this.catalogService = this.client.getService<catalog.CatalogService>('CatalogService')
  }

  getCategories(id: string[]) {
    return this.catalogService
      .getCategories({ filters: { id } })
      .pipe(map((data) => orderResultByKey(id, data.rows)))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string[], catalog.Category[]>(this.getCategories.bind(this))
  }
}
