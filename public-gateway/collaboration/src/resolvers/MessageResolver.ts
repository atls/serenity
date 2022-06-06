import { Loader }       from '@atls/nestjs-dataloader'
import { Injectable }   from '@nestjs/common'
import { ResolveField } from '@nestjs/graphql'
import { Resolver }     from '@nestjs/graphql'
import { Root }         from '@nestjs/graphql'

import DataLoader       from 'dataloader'

import { MemberLoader } from '../dataloaders'
import { UserLoader }   from '../dataloaders'
import { Message }      from '../types'

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
