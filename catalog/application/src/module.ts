import { Module }                      from '@nestjs/common'

import { CategoryGroupQueriesService } from './services'
import { CategoryGroupService }        from './services'
import { CategoryQueriesService }      from './services'
import { CategoryService }             from './services'

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
