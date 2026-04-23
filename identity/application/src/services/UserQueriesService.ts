import { Injectable }    from '@nestjs/common'

import { KratosService } from '@identity/kratos-adapter'

const defaultPager = { offset: 0, take: 24 }

const toCapitalized = (value: string) =>
  value ? `${value.slice(0, 1).toUpperCase()}${value.slice(1).toLowerCase()}` : ''

const resolveTypeFromEmail = (email: string) => {
  const normalizedEmail = (email || '').toLowerCase()

  if (normalizedEmail.includes('specialist')) {
    return 'specialist'
  }

  return 'customer'
}

const resolvePersonalInformation = (profile: any, email: string) => {
  const [localPart = 'user'] = (email || '').split('@')
  const [firstNameByEmail = 'User', lastNameByEmail = ''] = localPart
    .split(/[._+-]+/)
    .filter(Boolean)
    .map(toCapitalized)
  const firstName = profile?.personalInformation?.firstName || firstNameByEmail
  const lastName = profile?.personalInformation?.lastName || lastNameByEmail

  return { firstName, lastName }
}

const mapProfile = (identity: any) => {
  const profile = identity?.metadata_public?.profile || {}
  const email = identity?.traits?.email || ''
  const mappedProfile: any = {
    type: profile?.type || resolveTypeFromEmail(email),
    personalInformation: resolvePersonalInformation(profile, email),
  }

  if (profile?.photo?.id) {
    mappedProfile.photo = { id: profile.photo.id }
  }

  if (profile?.contactInformation) {
    mappedProfile.contactInformation = profile.contactInformation
  }

  if (profile?.address) {
    mappedProfile.address = profile.address
  }

  if (profile?.website) {
    mappedProfile.website = profile.website
  }

  return mappedProfile
}

const mapEmail = (identity: any) => {
  const address = identity?.traits?.email || ''
  const verified =
    identity?.verifiable_addresses?.some(
      (item) => item?.value === address && Boolean(item?.verified)
    ) || false

  return { address, verified }
}

const mapIdentity = (identity: any) => ({
  id: identity.id,
  email: mapEmail(identity),
  profile: mapProfile(identity),
})

@Injectable()
export class UserQueriesService {
  constructor(private readonly kratosService: KratosService) {}

  async getUsers(pager, order, filters) {
    const { offset, take } = pager || defaultPager

    const allIdentities = await this.kratosService.getProfiles()
    let identities = allIdentities

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        identities = identities.filter((identity) => filters.id.includes(identity.id))
      }
    }

    const total = identities.length
    const rows = identities.slice(offset, offset + take).map(mapIdentity)

    return {
      rows,
      pageInfo: {
        hasNext: total > take + offset,
      },
    }
  }
}
