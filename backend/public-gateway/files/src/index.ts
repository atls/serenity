import { Module }          from '@nestjs/common'

import { UploadMutations } from './resolvers'

export * from './types'

@Module({
  providers: [UploadMutations],
})
export class FilesModule {}
