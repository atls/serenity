import { Module }                      from '@nestjs/common'

import { CategoryGroupQueriesService } from './services/index.js'
import { CategoryGroupService }        from './services/index.js'
import { CategoryQueriesService }      from './services/index.js'
import { CategoryService }             from './services/index.js'

@Module({
  providers: [
    CategoryGroupService,
    CategoryService,
    CategoryGroupQueriesService,
    CategoryQueriesService,
  ],
  exports: [
    CategoryGroupService,
    CategoryService,
    CategoryGroupQueriesService,
    CategoryQueriesService,
  ],
})
export class ApplicationModule {}
