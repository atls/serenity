import { NestDataLoader }   from '@atls/nestjs-dataloader'
import { OrderResultByKey } from '@atls/nestjs-dataloader'
import { Injectable }       from '@nestjs/common'
import { OnModuleInit }     from '@nestjs/common'
import { Client }           from '@nestjs/microservices'
import { ClientGrpc }       from '@nestjs/microservices'

import DataLoader           from 'dataloader'
import { map }              from 'rxjs/operators'

import { clientOptions }    from '@protos/catalog'
import { catalog }          from '@protos/interfaces'

@Injectable()
export class CategoryLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private catalogService: catalog.CatalogService

  onModuleInit() {
    this.catalogService = this.client.getService<catalog.CatalogService>('CatalogService')
  }

  @OrderResultByKey()
  getCategories(id: string[]) {
    return this.catalogService
      .getCategories({ filters: { id } })
      .pipe(map((data) => data.rows))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, catalog.Category>(this.getCategories.bind(this))
  }
}
