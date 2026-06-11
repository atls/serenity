import { Module }               from '@nestjs/common'

import { DiscussionsResolver }  from './resolvers/index.js'
import { IdentityQueries }      from './resolvers/index.js'
import { MemberResolver }       from './resolvers/index.js'
import { PortfolioResolver }    from './resolvers/index.js'
import { ProfileMutations }     from './resolvers/index.js'
import { ProfilePhotoResolver } from './resolvers/index.js'
import { ProjectsResolver }     from './resolvers/index.js'
import { RepliesResolver }      from './resolvers/index.js'

export * from './types/index.js'

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
