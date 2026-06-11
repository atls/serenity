import { Module }                 from '@nestjs/common'

import { CategoryGroupMutations } from './resolvers/index.js'
import { CategoryGroupQueries }   from './resolvers/index.js'
import { CategoryMutations }      from './resolvers/index.js'

@Module({
  providers: [CategoryGroupQueries, CategoryGroupMutations, CategoryMutations],
})
export class CatalogModule {}
