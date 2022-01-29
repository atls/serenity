import { Module }               from '@nestjs/common'

import { DiscussionsResolver }  from './resolvers'
import { IdentityQueries }      from './resolvers'
import { MemberResolver }       from './resolvers'
import { PortfolioResolver }    from './resolvers'
import { ProfileMutations }     from './resolvers'
import { ProfilePhotoResolver } from './resolvers'
import { ProjectsResolver }     from './resolvers'
import { RepliesResolver }      from './resolvers'

export * from './types'

@Module({
  providers: [
    IdentityQueries,
    PortfolioResolver,
    ProfileMutations,
    ProfilePhotoResolver,
    MemberResolver,
    ProjectsResolver,
    RepliesResolver,
    DiscussionsResolver,
  ],
})
export class IdentityModule {}
