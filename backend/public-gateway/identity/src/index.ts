import { Module }                                                  from '@nestjs/common'

import { IdentityQueries, ProfileMutations, ProfilePhotoResolver } from './resolvers'

export * from './types'

@Module({
  providers: [IdentityQueries, ProfileMutations, ProfilePhotoResolver],
})
export class IdentityModule {}
