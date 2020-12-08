import { Module } from '@nestjs/common'

import {
  ActivityLoader,
  CategoriesLoader,
  CategoryLoader,
  CounterLoader,
  CustomerLoader,
  FilesLoader,
  MemberLoader,
  ProfileLoader,
  ProjectLoader,
  ReplyLoader,
  ReviewLoader,
  UserLoader,
} from './dataloaders'
import {
  DiscussionMutations,
  DiscussionResolver,
  MessageResolver,
  ProjectMutations,
  ProjectOwnerResolver,
  ProjectQueries,
  ProjectResolver,
  ReplyMutations,
  ReplyResolver,
  ReviewResolver,
  SpecialisationResolver,
  SpecialistMutations,
  SpecialistQueries,
  SpecialistResolver,
} from './resolvers'

export * from './types'

@Module({
  providers: [
    SpecialistMutations,
    SpecialisationResolver,
    CategoriesLoader,
    ProjectMutations,
    CategoryLoader,
    FilesLoader,
    ProjectResolver,
    ProjectQueries,
    SpecialistQueries,
    ProjectOwnerResolver,
    ProfileLoader,
    SpecialistResolver,
    ReplyMutations,
    MessageResolver,
    ReplyLoader,
    ProjectLoader,
    ReplyResolver,
    ReviewLoader,
    ReviewResolver,
    MemberLoader,
    CounterLoader,
    DiscussionMutations,
    UserLoader,
    DiscussionResolver,
    CustomerLoader,
    ActivityLoader,
  ],
})
export class CollaborationModule {}
