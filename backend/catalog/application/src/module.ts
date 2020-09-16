import { Module } from '@nestjs/common'

import {
  CategoryGroupQueriesService,
  CategoryGroupService,
  CategoryQueriesService,
  CategoryService,
} from './services'

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
