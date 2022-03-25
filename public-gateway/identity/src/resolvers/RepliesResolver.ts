import { Injectable }    from '@nestjs/common'
import { OnModuleInit }  from '@nestjs/common'
import { Args }          from '@nestjs/graphql'
import { ResolveField }  from '@nestjs/graphql'
import { Resolver }      from '@nestjs/graphql'
import { Root }          from '@nestjs/graphql'
import { ID }            from '@nestjs/graphql'
import { Client }        from '@nestjs/microservices'
import { ClientGrpc }    from '@nestjs/microservices'

import { map }           from 'rxjs/operators'

import { clientOptions } from '@protos/collaboration'
import { collaboration } from '@protos/interfaces'

import { User }          from '../types'

@Injectable()
@Resolver((of) => User)
export class RepliesResolver implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  @ResolveField()
  replies(
    @Root()
    user: any,
    @Args({ name: 'id', nullable: true, type: () => ID })
    id: string,
    @Args({ name: 'projectId', nullable: true, type: () => ID })
    projectId: string
  ) {
    return this.collaborationService
      .getReplies({
        filters: {
          id: id ? [id] : null,
          specialistId: [user.id],
          projectId: projectId ? [projectId] : null,
        },
      })
      .pipe(map((data: any) => data.rows))
  }
}
