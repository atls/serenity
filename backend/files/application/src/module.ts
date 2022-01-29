import { SignedUrlModule }    from '@monstrs/nestjs-signed-url'
import { Module }             from '@nestjs/common'

import { FileQueriesService } from './services'
import { UploadService }      from './services'

@Module({
  imports: [SignedUrlModule.gcs()],
  providers: [FileQueriesService, UploadService],
  exports: [FileQueriesService, UploadService],
})
export class ApplicationModule {}
