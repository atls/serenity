import { Injectable }   from '@nestjs/common'
import DataLoader       from 'dataloader'

import { Loader }       from '@atls/nestjs-dataloader'
import { ResolveField } from '@nestjs/graphql'
import { Resolver }     from '@nestjs/graphql'
import { Root }         from '@nestjs/graphql'

import { UserLoader }   from '../dataloaders/index.js'
import { Review }       from '../types/index.js'

@Injectable()
@Resolver((of) => Review)
export class ReviewResolver {
  @ResolveField()
  async customer(
    @Root() { customerId }: any,
    @Loader(UserLoader.name)
    userLoader: DataLoader<any, any>
  ) {
    const user = await userLoader.load(customerId)

    return user.profile
  }
}
