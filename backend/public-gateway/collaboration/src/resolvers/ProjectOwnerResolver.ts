import { Loader }          from '@monstrs/nestjs-dataloader'
import { Injectable }      from '@nestjs/common'
import { ResolveProperty } from '@nestjs/graphql'
import { Resolver }        from '@nestjs/graphql'
import { Root }            from '@nestjs/graphql'

import DataLoader          from 'dataloader'

import { ActivityLoader }  from '../dataloaders'
import { CustomerLoader }  from '../dataloaders'
import { UserLoader }      from '../dataloaders'
import { ProjectOwner }    from '../types'

@Injectable()
@Resolver((of) => ProjectOwner)
export class ProjectOwnerResolver {
  @ResolveProperty()
  async profile(
    @Root() { customerId }: any,
    @Loader(UserLoader.name)
    userLoader: DataLoader<any, any>
  ) {
    const user = await userLoader.load(customerId)

    return user.profile
  }

  @ResolveProperty()
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

  @ResolveProperty()
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
