export class SpecialistRatingUpdated {
  static readonly NAME = 'collaboration/specialist-rating-updated'

  $name = SpecialistRatingUpdated.NAME

  $version = 0

  constructor(
    readonly specialistId: string,
    readonly rating: number
  ) {}
}
