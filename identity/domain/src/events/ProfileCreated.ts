import { Profile } from '../model/index.js'

export class ProfileCreated {
  static readonly NAME = 'identity/profile-created'

  $name = ProfileCreated.NAME

  $version = 0

  constructor(
    readonly userId: string,
    readonly profile: Profile
  ) {}
}
