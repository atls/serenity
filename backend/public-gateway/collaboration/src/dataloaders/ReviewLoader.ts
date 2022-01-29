import { NestDataLoader } from '@atls/nestjs-dataloader'
import { Injectable }     from '@nestjs/common'
import { OnModuleInit }   from '@nestjs/common'
import { Client }         from '@nestjs/microservices'
import { ClientGrpc }     from '@nestjs/microservices'

import DataLoader         from 'dataloader'
import { map }            from 'rxjs/operators'

import { clientOptions }  from '@protos/collaboration'
import { collaboration }  from '@protos/interfaces'

@Injectable()
export class ReviewLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  getReviews = async (specialistId: string[]) =>
    this.collaborationService
      .getReviews({ filters: { specialistId } })
      .pipe(
        map((data: any) =>
          specialistId.map((id) => data.rows.filter((item) => item.specialistId === id)))
      )
      .toPromise()

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, collaboration.Review>(this.getReviews)
  }
}
