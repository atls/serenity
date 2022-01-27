import { MapValidationErrorsInterceptor } from '@monstrs/nestjs-map-errors-interceptor'
import { Controller }                     from '@nestjs/common'
import { UseInterceptors }                from '@nestjs/common'
import { UsePipes }                       from '@nestjs/common'
import { ValidationPipe }                 from '@nestjs/common'
import { GrpcMethod }                     from '@nestjs/microservices'

import { CreatePortfolioCommand }         from '@portfolio/application'
import { PortfolioService }               from '@portfolio/application'
import { UpdatePortfolioCommand }         from '@portfolio/application'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @GrpcMethod('PortfolioService', 'createPortfolio')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createPortfolio(request: CreatePortfolioCommand) {
    const result = await this.portfolioService.create(request)

    return {
      result,
    }
  }

  @GrpcMethod('PortfolioService', 'updatePortfolio')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updatePortfolio(request: UpdatePortfolioCommand) {
    const result = await this.portfolioService.update(request)

    return {
      result,
    }
  }
}
