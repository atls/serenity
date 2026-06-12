import { Injectable }             from '@nestjs/common'
import { Connection }             from 'typeorm'

import { Upload as UploadEntity } from '@files/domain'
import { Bus }                    from '@serenity/nestjs-bus'
import { Logger }                 from '@serenity/nestjs-bus'
import { WriteRepository }        from '@node-ts/ddd'

import { Upload }                 from '../entities/index.js'

@Injectable()
// @ts-ignore
export class UploadEntityRepository extends WriteRepository<UploadEntity, Upload> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(UploadEntity, Upload, connection, bus, logger)
  }
}
