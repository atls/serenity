import { NestDataLoader }   from '@atls/nestjs-dataloader'
import { OrderResultByKey } from '@atls/nestjs-dataloader'
import { Injectable }       from '@nestjs/common'
import { OnModuleInit }     from '@nestjs/common'
import { Client }           from '@nestjs/microservices'
import { ClientGrpc }       from '@nestjs/microservices'

import DataLoader           from 'dataloader'
import { map }              from 'rxjs/operators'

import { clientOptions }    from '@protos/collaboration'
import { collaboration }    from '@protos/interfaces'

@Injectable()
export class MemberLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  @OrderResultByKey()
  getMembers(ids: string[]) {
    return this.collaborationService
      .getSpecialists({ filters: { id: ids } })
      .pipe(map((data) => data.rows))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, collaboration.Specialist>(this.getMembers.bind(this))
  }
}
