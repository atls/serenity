import { Module }                 from '@nestjs/common'

import { ActivityLoader }         from './dataloaders/index.js'
import { CategoriesLoader }       from './dataloaders/index.js'
import { CategoryLoader }         from './dataloaders/index.js'
import { CounterLoader }          from './dataloaders/index.js'
import { CustomerLoader }         from './dataloaders/index.js'
import { FilesLoader }            from './dataloaders/index.js'
import { MemberLoader }           from './dataloaders/index.js'
import { PortfolioLoader }        from './dataloaders/index.js'
import { ProfileLoader }          from './dataloaders/index.js'
import { ProjectLoader }          from './dataloaders/index.js'
import { ReplyLoader }            from './dataloaders/index.js'
import { ReviewLoader }           from './dataloaders/index.js'
import { UserLoader }             from './dataloaders/index.js'
import { DiscussionMutations }    from './resolvers/index.js'
import { DiscussionResolver }     from './resolvers/index.js'
import { MessageResolver }        from './resolvers/index.js'
import { ProjectMutations }       from './resolvers/index.js'
import { ProjectOwnerResolver }   from './resolvers/index.js'
import { ProjectQueries }         from './resolvers/index.js'
import { ProjectResolver }        from './resolvers/index.js'
import { ReplyMutations }         from './resolvers/index.js'
import { ReplyResolver }          from './resolvers/index.js'
import { ReviewResolver }         from './resolvers/index.js'
import { SpecialisationResolver } from './resolvers/index.js'
import { SpecialistMutations }    from './resolvers/index.js'
import { SpecialistQueries }      from './resolvers/index.js'
import { SpecialistResolver }     from './resolvers/index.js'

export * from './types/index.js'

const loaderProviders = [
  CategoriesLoader,
  CategoryLoader,
  FilesLoader,
  ProfileLoader,
  PortfolioLoader,
  ReplyLoader,
  ProjectLoader,
  ReviewLoader,
  MemberLoader,
  CounterLoader,
  UserLoader,
  CustomerLoader,
  ActivityLoader,
]

const loaderAliases = loaderProviders.map((loader) => ({
  provide: loader.name,
  useExisting: loader,
}))

@Module({
  providers: [
    SpecialistMutations,
    SpecialisationResolver,
    ProjectMutations,
    ProjectResolver,
    ProjectQueries,
    SpecialistQueries,
    ProjectOwnerResolver,
    SpecialistResolver,
    ReplyMutations,
    MessageResolver,
    ReplyResolver,
    ReviewResolver,
    DiscussionMutations,
    DiscussionResolver,
    ...loaderProviders,
    ...loaderAliases,
  ],
})
export class CollaborationModule {}
