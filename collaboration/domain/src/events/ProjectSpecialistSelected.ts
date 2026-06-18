export class ProjectSpecialistSelected {
  static readonly NAME = 'collaboration/project-specialist-selected'

  $name = ProjectSpecialistSelected.NAME

  $version = 0

  constructor(
    readonly projectId: string,
    readonly replyId: string
  ) {}
}
