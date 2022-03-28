import { Module }                from '@nestjs/common'

import { ApplicationModule }     from '@files/application'
import { PersistenceModule }     from '@files/persistence'

import { FileQueriesController } from './controllers'
import { UploadController }      from './controllers'

@Module({
  imports: [
    PersistenceModule,
    ApplicationModule,
  ],
  controllers: [FileQueriesController, UploadController],
})
export class ServiceModule {}
