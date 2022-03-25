import { Injectable }    from '@nestjs/common'
import { ResolveField }  from '@nestjs/graphql'
import { Resolver }      from '@nestjs/graphql'
import { Root }          from '@nestjs/graphql'
import { Client }        from '@nestjs/microservices'
import { ClientGrpc }    from '@nestjs/microservices'

import { map }           from 'rxjs/operators'

import { clientOptions } from '@protos/collaboration'
import { collaboration } from '@protos/interfaces'

import { User }          from '../types'

@Injectable()
@Resolver((of) => User)
export class MemberResolver {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  @ResolveField()
  member(
    @Root()
    user: any
  ) {
    return this.collaborationService
      .getSpecialists({ filters: { id: [user.id] } })
      .pipe(map((data: any) => data.rows[0]))
  }
}
