import { Module }                    from '@nestjs/common'

import { ProjectsSearchResolver }    from './resolvers'
import { SearchQueries }             from './resolvers'
import { SpecialistsSearchResolver } from './resolvers'

export * from './types'

@Module({
  providers: [SearchQueries, ProjectsSearchResolver, SpecialistsSearchResolver],
})
export class SearchModule {}
