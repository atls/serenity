import { Injectable }                 from '@nestjs/common'
import { WriteRepository }            from '@node-ts/ddd'
import { Connection }                 from 'typeorm'

import { Category as CategoryEntity } from '@catalog/domain'

import { Category }                   from '../entities/index.js'
import { DomainEventPublisher }       from '../events/index.js'
import { WriteRepositoryLogger }               from '../events/index.js'

@Injectable()
// @ts-ignore
export class CategoryEntityRepository extends WriteRepository<CategoryEntity, Category> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: WriteRepositoryLogger,
    private readonly bus: DomainEventPublisher
  ) {
    // @ts-ignore
    super(CategoryEntity, Category, connection, bus, logger)
  }
}
