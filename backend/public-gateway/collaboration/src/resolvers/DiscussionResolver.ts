import { Loader }          from '@monstrs/nestjs-dataloader'
/* eslint-disable class-methods-use-this */
import { Injectable }      from '@nestjs/common'
import { Context }         from '@nestjs/graphql'
import { ResolveProperty } from '@nestjs/graphql'
import { Resolver }        from '@nestjs/graphql'
import { Root }            from '@nestjs/graphql'

import DataLoader          from 'dataloader'

import { UserLoader }      from '../dataloaders'
import { Discussion }      from '../types'

@Injectable()
@Resolver((of) => Discussion)
export class DiscussionResolver {
  @ResolveProperty()
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
