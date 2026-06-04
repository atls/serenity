import { Injectable }       from '@nestjs/common'
import { OnModuleInit }     from '@nestjs/common'
import { map }              from 'rxjs/operators'
import DataLoader           from 'dataloader'

import { NestDataLoader }   from '@atls/nestjs-dataloader'
import { Client }           from '@nestjs/microservices'
import { ClientGrpc }       from '@nestjs/microservices'
import { clientOptions }    from '@protos/identity'
import { identity }         from '@protos/interfaces'

import { orderResultByKey } from './orderResultByKey'

@Injectable()
export class ProfileLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private identityService: identity.IdentityService

  onModuleInit() {
    this.identityService = this.client.getService<identity.IdentityService>('IdentityService')
  }

  getProfiles(id: string[]) {
    return this.identityService
      .getUsers({ filters: { id } })
      .pipe(map((data) => orderResultByKey(id, (data as any).rows).map((row) => row && row.profile)))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, identity.Profile>(this.getProfiles.bind(this))
  }
}
