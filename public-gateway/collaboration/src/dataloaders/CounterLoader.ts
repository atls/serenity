import { Injectable }       from '@nestjs/common'
import { OnModuleInit }     from '@nestjs/common'
import { map }              from 'rxjs/operators'
import DataLoader           from 'dataloader'

import { NestDataLoader }   from '@atls/nestjs-dataloader'
import { Client }           from '@nestjs/microservices'
import { ClientGrpc }       from '@nestjs/microservices'
import { clientOptions }    from '@protos/hits'
import { hits }             from '@protos/interfaces'

import { orderResultByKey } from './orderResultByKey.js'

@Injectable()
export class CounterLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private hitsService: hits.HitsService

  onModuleInit() {
    this.hitsService = this.client.getService<hits.HitsService>('HitsService')
  }

  getCounters(ids: string[]) {
    return this.hitsService
      .getCounters({ filters: { id: ids } })
      .pipe(map((data) => orderResultByKey(ids, data.rows, 'id', 0)))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, hits.Counter[]>(this.getCounters.bind(this))
  }
}
