/* eslint-disable class-methods-use-this */
import DataLoader                          from 'dataloader'
import { Loader }                          from '@monstrs/nestjs-dataloader'
import { Injectable }                      from '@nestjs/common'
import { ResolveProperty, Resolver, Root } from '@nestjs/graphql'

import { UserLoader }                      from '../dataloaders'
import { Review }                          from '../types'

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
