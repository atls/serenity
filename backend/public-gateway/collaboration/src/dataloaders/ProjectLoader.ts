import DataLoader                           from 'dataloader'
import { NestDataLoader, OrderResultByKey } from '@monstrs/nestjs-dataloader'
import { Injectable, OnModuleInit }         from '@nestjs/common'
import { Client, ClientGrpc }               from '@nestjs/microservices'
import { map }                              from 'rxjs/operators'

import { clientOptions }                    from '@protos/collaboration'
import { collaboration }                    from '@protos/interfaces'

@Injectable()
export class ProjectLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService = this.client.getService<collaboration.CollaborationService>(
      'CollaborationService'
    )
  }

  @OrderResultByKey()
  getProjects(id: string[]) {
    return this.collaborationService
      .getProjects({ filters: { id } })
      .pipe(map(data => data.rows))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    return new DataLoader<string, collaboration.Project>(this.getProjects.bind(this))
  }
}
