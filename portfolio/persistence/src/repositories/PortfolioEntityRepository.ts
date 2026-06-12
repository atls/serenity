import { Injectable }                   from '@nestjs/common'
import { WriteRepository }              from '@node-ts/ddd'
import { Connection }                   from 'typeorm'

import { Portfolio as PortfolioEntity } from '@portfolio/domain'

import { Portfolio }                    from '../entities/index.js'
import { DomainEventPublisher }         from '../events/index.js'
import { DomainLogger }                 from '../events/index.js'

@Injectable()
// @ts-ignore
export class PortfolioEntityRepository extends WriteRepository<PortfolioEntity, Portfolio> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: DomainLogger,
    private readonly bus: DomainEventPublisher
  ) {
    // @ts-ignore
    super(PortfolioEntity, Portfolio, connection, bus, logger)
  }
}
