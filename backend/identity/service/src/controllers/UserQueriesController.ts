import { Controller }         from '@nestjs/common'
import { GrpcMethod }         from '@nestjs/microservices'

import { UserQueriesService } from '@identity/application'

@Controller()
export class UserQueriesController {
  constructor(private readonly userQueriesService: UserQueriesService) {}

  @GrpcMethod('IdentityService', 'getUsers')
  getProducts({ pager, order, filters }) {
    return this.userQueriesService.getUsers(pager, order, filters)
  }
}
