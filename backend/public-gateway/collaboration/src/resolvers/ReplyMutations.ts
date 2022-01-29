import { Injectable }                  from '@nestjs/common'
import { OnModuleInit }                from '@nestjs/common'
import { Args }                        from '@nestjs/graphql'
import { Context }                     from '@nestjs/graphql'
import { Mutation }                    from '@nestjs/graphql'
import { Client }                      from '@nestjs/microservices'
import { ClientGrpc }                  from '@nestjs/microservices'

import { clientOptions }               from '@protos/collaboration'
import { collaboration }               from '@protos/interfaces'

import { AddProjectReplyInput }        from '../inputs'
import { AddReplyMessageInput }        from '../inputs'
import { ChangeReplyStatusInput }      from '../inputs'
import { ChooseSpecialistInput }       from '../inputs'
import { ConfirmProjectReplyInput }    from '../inputs'
import { RejectProjectReplyInput }     from '../inputs'
import { AddProjectReplyResponse }     from '../types'
import { AddReplyMessageResponse }     from '../types'
import { ChangeReplyStatusResponse }   from '../types'
import { ChooseSpecialistResponse }    from '../types'
import { ConfirmProjectReplyResponse } from '../types'
import { RejectProjectReplyResponse }  from '../types'

@Injectable()
export class ReplyMutations implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  @Mutation((returns) => AddProjectReplyResponse)
  addProjectReply(
    @Args('input')
    input: AddProjectReplyInput,
    @Context('user') specialistId: string
  ) {
    return this.collaborationService.addProjectReply({ ...input, specialistId })
  }

  @Mutation((returns) => ConfirmProjectReplyResponse)
  confirmProjectReply(
    @Args('input')
    input: ConfirmProjectReplyInput,
    @Context('user') specialistId: string
  ) {
    return this.collaborationService.confirmProjectReply({
      ...input,
      specialistId,
    })
  }

  @Mutation((returns) => RejectProjectReplyResponse)
  rejectProjectReply(
    @Args('input')
    input: RejectProjectReplyInput,
    @Context('user') specialistId: string
  ) {
    return this.collaborationService.rejectProjectReply({
      ...input,
      specialistId,
    })
  }

  @Mutation((returns) => AddReplyMessageResponse)
  addReplyMessage(
    @Args('input')
    input: AddReplyMessageInput,
    @Context('user') authorId: string
  ) {
    return this.collaborationService.addReplyMessage({ ...input, authorId })
  }

  @Mutation((returns) => ChangeReplyStatusResponse)
  changeReplyStatus(
    @Args('input')
    input: ChangeReplyStatusInput,
    @Context('user') customerId: string
  ) {
    return this.collaborationService.changeReplyStatus({ ...input, customerId })
  }

  @Mutation((returns) => ChooseSpecialistResponse)
  chooseSpecialist(
    @Args('input')
    input: ChooseSpecialistInput,
    @Context('user') customerId: string
  ) {
    return this.collaborationService.chooseSpecialist({ ...input, customerId })
  }
}
