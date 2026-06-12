import { Injectable }               from '@nestjs/common'
import { Connection }               from 'typeorm'

import { Project as ProjectEntity } from '@collaboration/domain'
import { Bus }                      from '@serenity/nestjs-bus'
import { Logger }                   from '@serenity/nestjs-bus'
import { WriteRepository }          from '@node-ts/ddd'

import { Project }                  from '../entities/index.js'

@Injectable()
// @ts-ignore
export class ProjectEntityRepository extends WriteRepository<ProjectEntity, Project> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(ProjectEntity, Project, connection, bus, logger)
  }
}
