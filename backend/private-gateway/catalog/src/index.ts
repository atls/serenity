import { Module }                                                          from '@nestjs/common'

import { CategoryGroupMutations, CategoryGroupQueries, CategoryMutations } from './resolvers'

@Module({
  providers: [CategoryGroupQueries, CategoryGroupMutations, CategoryMutations],
})
export class CatalogModule {}
