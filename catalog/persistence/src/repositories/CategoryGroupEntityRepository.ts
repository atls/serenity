import { Injectable }                           from '@nestjs/common'
import { Connection }                           from 'typeorm'

import { CategoryGroup as CategoryGroupEntity } from '@catalog/domain'
import { Bus }                                  from '@serenity/nestjs-bus'
import { Logger }                               from '@serenity/nestjs-bus'
import { WriteRepository }                      from '@node-ts/ddd'

import { CategoryGroup }                        from '../entities/index.js'

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
    // @ts-ignore
    super(CategoryGroupEntity, CategoryGroup, connection, bus, logger)
  }
}
