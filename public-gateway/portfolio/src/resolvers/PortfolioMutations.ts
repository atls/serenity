import { Injectable }              from '@nestjs/common'
import { OnModuleInit }            from '@nestjs/common'
import { Args }                    from '@nestjs/graphql'
import { Context }                 from '@nestjs/graphql'
import { Mutation }                from '@nestjs/graphql'
import { Client }                  from '@nestjs/microservices'
import { ClientGrpc }              from '@nestjs/microservices'

import { portfolio }               from '@protos/interfaces'
import { clientOptions }           from '@protos/portfolio'

import { CreatePortfolioInput }    from '../inputs'
import { UpdatePortfolioInput }    from '../inputs'
import { CreatePortfolioResponse } from '../types'
import { UpdatePortfolioResponse } from '../types'

@Injectable()
export class PortfolioMutations implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private portfolioService: portfolio.PortfolioService

  onModuleInit() {
    this.portfolioService = this.client.getService<portfolio.PortfolioService>('PortfolioService')
  }

  @Mutation((returns) => CreatePortfolioResponse)
  createPortfolio(
    @Args('input')
    input: CreatePortfolioInput,
    @Context('user') userId: string
  ) {
    return this.portfolioService.createPortfolio({ ...input, userId })
  }

  @Mutation((returns) => UpdatePortfolioResponse)
  updatePortfolio(
    @Args('input')
    input: UpdatePortfolioInput,
    @Context('user') userId: string
  ) {
    return this.portfolioService.updatePortfolio({ ...input, userId })
  }
}
