import { Injectable }      from '@nestjs/common'
import { OnModuleInit }    from '@nestjs/common'
import { Args }            from '@nestjs/graphql'
import { ResolveField } from '@nestjs/graphql'
import { Resolver }        from '@nestjs/graphql'
import { Root }            from '@nestjs/graphql'
import { Client }          from '@nestjs/microservices'
import { ClientGrpc }      from '@nestjs/microservices'

import { ID }              from '@nestjs/graphql'
import { map }             from 'rxjs/operators'

import { portfolio }       from '@protos/interfaces'
import { clientOptions }   from '@protos/portfolio'

import { User }            from '../types'

@Injectable()
@Resolver((of) => User)
export class PortfolioResolver implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private portfolioService: portfolio.PortfolioService

  onModuleInit() {
    this.portfolioService = this.client.getService<portfolio.PortfolioService>('PortfolioService')
  }

  @ResolveField()
  portfolio(
    @Root()
    user: any,
    @Args({ name: 'id', nullable: true, type: () => ID })
    id: string
  ) {
    return this.portfolioService
      .getPortfolio({ filters: { userId: [user.id], id: id ? [id] : null } })
      .pipe(map((data: any) => data.rows))
  }
}
