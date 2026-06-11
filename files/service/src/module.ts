import { Module }                from '@nestjs/common'

import { ApplicationModule }     from '@files/application'
import { PersistenceModule }     from '@files/persistence'

import { FileQueriesController } from './controllers/index.js'
import { UploadController }      from './controllers/index.js'

@Module({
  imports: [PersistenceModule, ApplicationModule],
  controllers: [FileQueriesController, UploadController],
})
export class ServiceModule {}
