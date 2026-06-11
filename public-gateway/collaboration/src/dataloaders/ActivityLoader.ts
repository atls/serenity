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
export class ActivityLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private hitsService: hits.HitsService

  onModuleInit() {
    this.hitsService = this.client.getService<hits.HitsService>('HitsService')
  }

  getActivities(id: string[]) {
    return this.hitsService
      .getActivities({ filters: { id } })
      .pipe(map((data) => orderResultByKey(id, data.rows)))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, hits.Activity[]>(this.getActivities.bind(this))
  }
}
