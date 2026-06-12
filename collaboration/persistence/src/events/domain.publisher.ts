import type { ClientProxy }      from '@nestjs/microservices'

import { Inject }                from '@nestjs/common'
import { Injectable }            from '@nestjs/common'
import { firstValueFrom }        from 'rxjs'

import { ProjectCompleted }      from '@collaboration/domain'
import { ProjectCreated }        from '@collaboration/domain'
import { ProjectPublished }      from '@collaboration/domain'
import { ProjectReplyConfirmed } from '@collaboration/domain'
import { ProjectReplyRejected }  from '@collaboration/domain'
import { ProjectUpdated }        from '@collaboration/domain'
import { SpecialistUpdated }     from '@collaboration/domain'

import { SEARCH_EVENTS_CLIENT }  from './tokens.js'

type DomainEvent = {
  $name?: string
}

const searchEvents = new Set([
  ProjectCompleted.NAME,
  ProjectCreated.NAME,
  ProjectPublished.NAME,
  ProjectReplyConfirmed.NAME,
  ProjectReplyRejected.NAME,
  ProjectUpdated.NAME,
  SpecialistUpdated.NAME,
])

@Injectable()
export class DomainEventPublisher {
  constructor(@Inject(SEARCH_EVENTS_CLIENT) private readonly searchClient: ClientProxy) {}

  async publish(event: DomainEvent): Promise<void> {
    if (!event.$name || !searchEvents.has(event.$name)) {
      return
    }

    await firstValueFrom(this.searchClient.emit(event.$name, event))
  }
}
