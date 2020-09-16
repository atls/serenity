import { Module }                                from '@nestjs/common'

import { CategoryGroupQueries, CategoryQueries } from './resolvers'

export * from './types'

@Module({
  providers: [CategoryGroupQueries, CategoryQueries],
})
export class CatalogModule {}
