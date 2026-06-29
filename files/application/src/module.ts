import { GcsClientFactory }   from '@atls/nestjs-gcs-client'
import { GcsClientModule }    from '@atls/nestjs-gcs-client'
import { SignedUrlModule }    from '@atls/nestjs-signed-url'
import { Module }             from '@nestjs/common'

import { FileQueriesService } from './services/index.js'
import { UploadService }      from './services/index.js'

@Module({
  imports: [
    SignedUrlModule.gcsAsync<[GcsClientFactory]>({
      imports: [
        GcsClientModule.register({
          apiEndpoint: process.env.GCS_API_ENDPOINT,
          keyFilename: process.env.GCS_KEY_FILENAME,
        }),
      ],
      inject: [GcsClientFactory],
      useFactory: (factory: GcsClientFactory) => factory.create(),
    }),
  ],
  providers: [FileQueriesService, UploadService],
  exports: [FileQueriesService, UploadService],
})
export class ApplicationModule {}
