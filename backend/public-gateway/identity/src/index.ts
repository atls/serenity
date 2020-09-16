import { Module } from '@nestjs/common'

import {
  IdentityQueries,
  ProfileMutations,
} from './resolvers'

export * from './types'

@Module({
  providers: [
    IdentityQueries,
    ProfileMutations,
  ],
})
export class IdentityModule {}
