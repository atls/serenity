import { Injectable }         from '@nestjs/common'
import { Connection }         from 'typeorm'

import { File as FileEntity } from '@files/domain'
import { Bus }                from '@serenity/nestjs-bus'
import { Logger }             from '@serenity/nestjs-bus'
import { WriteRepository }    from '@node-ts/ddd'

import { File }               from '../entities/index.js'

@Injectable()
// @ts-ignore
export class FileEntityRepository extends WriteRepository<FileEntity, File> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(FileEntity, File, connection, bus, logger)
  }
}
