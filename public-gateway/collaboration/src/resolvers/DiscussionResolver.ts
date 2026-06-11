import { Injectable }   from '@nestjs/common'
import DataLoader       from 'dataloader'

import { Loader }       from '@atls/nestjs-dataloader'
import { Context }      from '@nestjs/graphql'
import { ResolveField } from '@nestjs/graphql'
import { Resolver }     from '@nestjs/graphql'
import { Root }         from '@nestjs/graphql'

import { UserLoader }   from '../dataloaders/index.js'
import { Discussion }   from '../types/index.js'

@Injectable()
@Resolver((of) => Discussion)
export class DiscussionResolver {
  @ResolveField()
  recipient(
    @Root() { customerId, specialistId }: any,
    @Loader(UserLoader.name)
    userLoader: DataLoader<any, any>,
    @Context('user') userId: string
  ) {
    if (userId === customerId) {
      return userLoader.load(specialistId)
    }

    return userLoader.load(customerId)
  }
}
