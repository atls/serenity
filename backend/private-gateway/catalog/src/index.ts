import { Module }                 from '@nestjs/common'

import { CategoryGroupMutations } from './resolvers'
import { CategoryGroupQueries }   from './resolvers'
import { CategoryMutations }      from './resolvers'

@Module({
  providers: [CategoryGroupQueries, CategoryGroupMutations, CategoryMutations],
})
export class CatalogModule {}
