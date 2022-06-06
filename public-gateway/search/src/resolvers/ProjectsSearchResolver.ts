import { Injectable }                                  from '@nestjs/common'
import { OnModuleInit }                                from '@nestjs/common'
import { Args }                                        from '@nestjs/graphql'
import { ResolveField }                                from '@nestjs/graphql'
import { Resolver }                                    from '@nestjs/graphql'
import { Client }                                      from '@nestjs/microservices'
import { ClientGrpc }                                  from '@nestjs/microservices'

import { firstValueFrom }                              from 'rxjs'

import { clientOptions as collaborationClientOptions } from '@protos/collaboration'
import { collaboration }                               from '@protos/interfaces'
import { search }                                      from '@protos/interfaces'
import { clientOptions as searchClientOptions }        from '@protos/search'

import { SearchProjectsFilter }                        from '../inputs'
import { Search }                                      from '../types'

@Injectable()
@Resolver((of) => Search)
export class ProjectsSearchResolver implements OnModuleInit {
  @Client(searchClientOptions)
  private readonly searchClient: ClientGrpc

  @Client(collaborationClientOptions)
  private readonly collaborationClient: ClientGrpc

  private searchService: search.SearchService

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.searchService = this.searchClient.getService<search.SearchService>('SearchService')

    this.collaborationService =
      this.collaborationClient.getService<collaboration.CollaborationService>(
        'CollaborationService'
      )
  }

  @ResolveField()
  async projects(
    @Args('query')
    query?: string,

    @Args({ name: 'filters', nullable: true, type: () => SearchProjectsFilter })
    filters?: SearchProjectsFilter
  ) {
    const { rows: hits } = await firstValueFrom(
      this.searchService.searchProjects({ query, filters })
    )

    if ((hits as any).length === 0) {
      return {
        rows: [],
      }
    }

    const { rows } = await firstValueFrom(
      this.collaborationService.getProjects({
        filters: {
          id: (hits as any).map((hit) => hit.id),
        },
      })
    )

    return {
      // @ts-ignore
      rows: (rows || []).sort((a, b) => b.publicationDate - a.publicationDate),
    }
  }
}
