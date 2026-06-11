import { Injectable }   from '@nestjs/common'
import DataLoader       from 'dataloader'

import { Loader }       from '@atls/nestjs-dataloader'
import { ResolveField } from '@nestjs/graphql'
import { Resolver }     from '@nestjs/graphql'
import { Root }         from '@nestjs/graphql'

import { MemberLoader } from '../dataloaders/index.js'
import { UserLoader }   from '../dataloaders/index.js'
import { Message }      from '../types/index.js'

@Injectable()
@Resolver((of) => Message)
export class MessageResolver {
  @ResolveField()
  async author(
    @Root() { authorId }: any,
    @Loader(UserLoader.name)
    userLoader: DataLoader<any, any>
  ) {
    const user = await userLoader.load(authorId)

    return user.profile
  }

  @ResolveField()
  member(
    @Root() { authorId }: any,
    @Loader(MemberLoader.name)
    memberLoader: DataLoader<any, any>
  ) {
    if (!authorId) {
      return null
    }

    return memberLoader.load(authorId)
  }
}
