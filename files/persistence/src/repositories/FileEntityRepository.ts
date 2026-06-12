import { Injectable }           from '@nestjs/common'
import { WriteRepository }      from '@node-ts/ddd'
import { Connection }           from 'typeorm'

import { File as FileEntity }   from '@files/domain'

import { File }                 from '../entities/index.js'
import { DomainEventPublisher } from '../events/index.js'
import { DomainLogger }         from '../events/index.js'

@Injectable()
// @ts-ignore
export class FileEntityRepository extends WriteRepository<FileEntity, File> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: DomainLogger,
    private readonly bus: DomainEventPublisher
  ) {
    // @ts-ignore
    super(FileEntity, File, connection, bus, logger)
  }
}
