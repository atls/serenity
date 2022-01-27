import { Module }                 from '@nestjs/common'

import { ActivityLoader }         from './dataloaders'
import { CategoriesLoader }       from './dataloaders'
import { CategoryLoader }         from './dataloaders'
import { CounterLoader }          from './dataloaders'
import { CustomerLoader }         from './dataloaders'
import { FilesLoader }            from './dataloaders'
import { MemberLoader }           from './dataloaders'
import { PortfolioLoader }        from './dataloaders'
import { ProfileLoader }          from './dataloaders'
import { ProjectLoader }          from './dataloaders'
import { ReplyLoader }            from './dataloaders'
import { ReviewLoader }           from './dataloaders'
import { UserLoader }             from './dataloaders'
import { DiscussionMutations }    from './resolvers'
import { DiscussionResolver }     from './resolvers'
import { MessageResolver }        from './resolvers'
import { ProjectMutations }       from './resolvers'
import { ProjectOwnerResolver }   from './resolvers'
import { ProjectQueries }         from './resolvers'
import { ProjectResolver }        from './resolvers'
import { ReplyMutations }         from './resolvers'
import { ReplyResolver }          from './resolvers'
import { ReviewResolver }         from './resolvers'
import { SpecialisationResolver } from './resolvers'
import { SpecialistMutations }    from './resolvers'
import { SpecialistQueries }      from './resolvers'
import { SpecialistResolver }     from './resolvers'

export * from './types'

@Module({
  providers: [
    SpecialistMutations,
    SpecialisationResolver,
    CategoriesLoader,
    ProjectMutations,
    CategoryLoader,
    FilesLoader,
    ProjectResolver,
    ProjectQueries,
    SpecialistQueries,
    ProjectOwnerResolver,
    ProfileLoader,
    SpecialistResolver,
    PortfolioLoader,
    ReplyMutations,
    MessageResolver,
    ReplyLoader,
    ProjectLoader,
    ReplyResolver,
    ReviewLoader,
    ReviewResolver,
    MemberLoader,
    CounterLoader,
    DiscussionMutations,
    UserLoader,
    DiscussionResolver,
    CustomerLoader,
    ActivityLoader,
  ],
})
export class CollaborationModule {}
