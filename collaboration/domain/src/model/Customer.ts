import { AggregateRoot }   from '@node-ts/ddd'

import { Address }         from './Address.js'
import { BeginningOfWork } from './BeginningOfWork.js'
import { Project }         from './Project.js'
import { Reply }           from './Reply.js'

export class Customer extends AggregateRoot {
  openProjects: number

  completedProjects: number

  createProject(
    projectId: string,
    name: string,
    categoryId: string,
    photos: string[],
    address: Address,
    beginningOfWork: BeginningOfWork,
    budget: number,
    legalEntitiesOnly: boolean,
    worksheet: string,
    description?: string
  ) {
    return Project.create(
      projectId,
      this.id,
      name,
      categoryId,
      photos,
      address,
      beginningOfWork,
      budget,
      legalEntitiesOnly,
      worksheet,
      description
    )
  }

  publishProject(project: Project) {
    project.publish()

    this.openProjects += 1
  }

  completeProject(project: Project, reply: Reply, rating: number, comment: string) {
    if (this.openProjects > 0) {
      this.openProjects -= 1
    }

    this.completedProjects += 1

    return project.complete(reply, rating, comment)
  }
}
