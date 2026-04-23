import { Injectable }       from '@nestjs/common'
import { Repository }       from 'typeorm'

import { ProjectId }        from '@collaboration/persistence'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ProjectIdService {
  constructor(
    @InjectRepository(ProjectId)
    private readonly projectIdRepository: Repository<ProjectId>
  ) {}

  async generate(): Promise<string> {
    const projectId = await this.projectIdRepository.save(this.projectIdRepository.create())

    return projectId.build()
  }
}
