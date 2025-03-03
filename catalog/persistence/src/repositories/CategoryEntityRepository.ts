// import { Bus }                        from '@monstrs/nestjs-bus'
import { Logger }                     from '@monstrs/nestjs-logger'
import { Injectable }                 from '@nestjs/common'
import { WriteRepository }            from '@node-ts/ddd'
import { Connection }                 from 'typeorm'

import { Category as CategoryEntity } from '@catalog/domain'

import { Category }                   from '../entities/index.js'

@Injectable()
// @ts-expect-error - no types available
export class CategoryEntityRepository extends WriteRepository<CategoryEntity, Category> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger // private readonly bus: Bus
  ) {
    // @ts-expect-error - no types available
    // super(CategoryEntity, Category, connection, bus, logger);
    super(CategoryEntity, Category, connection, logger)
  }
}
