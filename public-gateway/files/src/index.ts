import { Module }          from '@nestjs/common'

import { UploadMutations } from './resolvers/index.js'

export * from './types/index.js'

@Module({
  providers: [UploadMutations],
})
export class FilesModule {}
