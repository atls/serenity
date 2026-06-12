import { Injectable }             from '@nestjs/common'
import { WriteRepository }        from '@node-ts/ddd'
import { Connection }             from 'typeorm'

import { Upload as UploadEntity } from '@files/domain'

import { Upload }                 from '../entities/index.js'
import { DomainEventPublisher }   from '../events/index.js'
import { WriteRepositoryLogger }           from '../events/index.js'

@Injectable()
// @ts-ignore
export class UploadEntityRepository extends WriteRepository<UploadEntity, Upload> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: WriteRepositoryLogger,
    private readonly bus: DomainEventPublisher
  ) {
    // @ts-ignore
    super(UploadEntity, Upload, connection, bus, logger)
  }
}
