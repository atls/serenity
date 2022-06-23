import { Injectable }    from '@nestjs/common'

import { KratosService } from '@identity/kratos-adapter'

@Injectable()
export class UserQueriesService {
  constructor(private readonly kratosService: KratosService) {}

  async getUsers(pager, order, filters) {
    const { offset, take } = pager || { offset: 0, take: 24 }

    const allProfiles = await this.kratosService.getProfiles()
    let profiles = allProfiles

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        profiles = profiles.filter((profile) => profile.id === filters.id)
      }
    }

    profiles = profiles.slice(offset, offset + take)

    return {
      rows: profiles,
      pageInfo: {
        hasNext: allProfiles.length > take + offset,
      },
    }
  }
}
