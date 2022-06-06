import { Loader }         from '@atls/nestjs-dataloader'
import { Injectable }     from '@nestjs/common'
import { ResolveField }   from '@nestjs/graphql'
import { Resolver }       from '@nestjs/graphql'
import { Root }           from '@nestjs/graphql'

import DataLoader         from 'dataloader'

import { ActivityLoader } from '../dataloaders'
import { CustomerLoader } from '../dataloaders'
import { UserLoader }     from '../dataloaders'
import { ProjectOwner }   from '../types'

@Injectable()
@Resolver((of) => ProjectOwner)
export class ProjectOwnerResolver {
  @ResolveField()
  async profile(
    @Root() { customerId }: any,
    @Loader(UserLoader.name)
    userLoader: DataLoader<any, any>
  ) {
    const user = await userLoader.load(customerId)

    return user.profile
  }

  @ResolveField()
  member(
    @Root() { customerId }: any,
    @Loader(CustomerLoader.name)
    customerLoader: DataLoader<any, any>
  ) {
    if (!customerId) {
      return null
    }

    return customerLoader.load(customerId)
  }

  @ResolveField()
  activity(
    @Root() { customerId }: any,
    @Loader(ActivityLoader.name)
    activityLoader: DataLoader<any, any>
  ) {
    if (!customerId) {
      return null
    }

    return activityLoader.load(customerId)
  }
}
