import { Injectable }       from '@nestjs/common'
import { OnModuleInit }     from '@nestjs/common'
import { map }              from 'rxjs/operators'
import DataLoader           from 'dataloader'

import { NestDataLoader }   from '@atls/nestjs-dataloader'
import { Client }           from '@nestjs/microservices'
import { ClientGrpc }       from '@nestjs/microservices'
import { clientOptions }    from '@protos/collaboration'
import { collaboration }    from '@protos/interfaces'

import { orderResultByKey } from './orderResultByKey'

@Injectable()
export class ProjectLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  getProjects(id: string[]) {
    return this.collaborationService
      .getProjects({ filters: { id } })
      .pipe(map((data) => orderResultByKey(id, data.rows)))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, collaboration.Project>(this.getProjects.bind(this))
  }
}
