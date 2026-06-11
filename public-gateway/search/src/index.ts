import { Module }                    from '@nestjs/common'

import { ProjectsSearchResolver }    from './resolvers/index.js'
import { SearchQueries }             from './resolvers/index.js'
import { SpecialistsSearchResolver } from './resolvers/index.js'

export * from './types/index.js'

@Module({
  providers: [SearchQueries, ProjectsSearchResolver, SpecialistsSearchResolver],
})
export class SearchModule {}
