export class ProjectPublished {
  static readonly NAME = 'collaboration/project-published'

  $name = ProjectPublished.NAME

  $version = 0

  constructor(readonly projectId: string) {}
}
