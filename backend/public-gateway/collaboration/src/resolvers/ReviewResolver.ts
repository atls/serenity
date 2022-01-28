import { Loader }          from '@monstrs/nestjs-dataloader'
import { Injectable }      from '@nestjs/common'
import { ResolveProperty } from '@nestjs/graphql'
import { Resolver }        from '@nestjs/graphql'
import { Root }            from '@nestjs/graphql'

import DataLoader          from 'dataloader'

import { UserLoader }      from '../dataloaders'
import { Review }          from '../types'

@Injectable()
@Resolver((of) => Review)
export class ReviewResolver {
  @ResolveProperty()
  async customer(
    @Root() { customerId }: any,
    @Loader(UserLoader.name)
    userLoader: DataLoader<any, any>
  ) {
    const user = await userLoader.load(customerId)

    return user.profile
  }
}
