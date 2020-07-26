import { Uuid }    from '@node-ts/ddd-types'

import { Event }   from '@node-ts/bus-messages'

import { Profile } from '../model'

export class ProfileCreated extends Event {
  static readonly NAME = 'identity/profile-created'

  $name = ProfileCreated.NAME

  $version = 0

  constructor(readonly userId: Uuid, readonly profile: Profile) {
    super()
  }
}
