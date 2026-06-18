export class ProjectCompleted {
  static readonly NAME = 'collaboration/project-completed'

  $name = ProjectCompleted.NAME

  $version = 0

  constructor(readonly projectId: string) {}
}
