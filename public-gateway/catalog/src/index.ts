import { Module }               from '@nestjs/common'

import { CategoryGroupQueries } from './resolvers/index.js'
import { CategoryQueries }      from './resolvers/index.js'

export * from './types/index.js'

@Module({
  providers: [CategoryGroupQueries, CategoryQueries],
})
export class CatalogModule {}
