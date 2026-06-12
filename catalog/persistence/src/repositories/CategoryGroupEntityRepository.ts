import { Injectable }                           from '@nestjs/common'
import { WriteRepository }                      from '@node-ts/ddd'
import { Connection }                           from 'typeorm'

import { CategoryGroup as CategoryGroupEntity } from '@catalog/domain'

import { CategoryGroup }                        from '../entities/index.js'
import { DomainEventPublisher }                 from '../events/index.js'
import { DomainLogger }                         from '../events/index.js'

@Injectable()
// @ts-ignore
export class CategoryGroupEntityRepository extends WriteRepository<
  CategoryGroupEntity,
  CategoryGroup
> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: DomainLogger,
    private readonly bus: DomainEventPublisher
  ) {
    // @ts-ignore
    super(CategoryGroupEntity, CategoryGroup, connection, bus, logger)
  }
}
