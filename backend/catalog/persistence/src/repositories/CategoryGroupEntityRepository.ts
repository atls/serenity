import { Bus }                                  from '@monstrs/nestjs-bus'
import { Logger }                               from '@monstrs/nestjs-logger'
import { Injectable }                           from '@nestjs/common'
import { WriteRepository }                      from '@node-ts/ddd'
import { Connection }                           from 'typeorm'

import { CategoryGroup as CategoryGroupEntity } from '@catalog/domain'

import { CategoryGroup }                        from '../entities'

@Injectable()
// @ts-ignore
export class CategoryGroupEntityRepository extends WriteRepository<
  CategoryGroupEntity,
  CategoryGroup
> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    super(CategoryGroupEntity, CategoryGroup, connection, bus, logger)
  }
}
