import { Injectable }    from '@nestjs/common'
import { Configuration } from '@ory/kratos-client'
import { V0alpha2Api }   from '@ory/kratos-client'
import { Identity }      from '@ory/kratos-client'

@Injectable()
export class KratosService {
  private readonly client

  constructor() {
    this.client = new V0alpha2Api(new Configuration({ basePath: process.env.KRATOS_PUBLIC_URL }))
  }

  async getProfiles(perPage?: number, page?: number): Promise<Array<Identity>> {
    const profiles = await this.client.adminListIdentities(perPage, page)

    return profiles.data
  }

  async deleteProfile(id: string): Promise<void> {
    await this.client.adminDeleteIdentity(id)
  }

  async whoami(session: string): Promise<Identity> {
    const response = await this.client.toSession(undefined, `ory_kratos_session=${session}`)

    return response.data?.identity
  }

  async getProfile(id: string): Promise<Identity> {
    const response = await this.client.adminGetIdentity(id)

    return response.data
  }
}
