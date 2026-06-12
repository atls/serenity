import { Injectable }      from '@nestjs/common'
import { Scope }           from '@nestjs/common'
import { ModuleRef }       from '@nestjs/core'
import { HealthCheckError } from '@godaddy/terminus'
import { HealthIndicator } from '@nestjs/terminus'

import { Bus }             from '../bus.js'

@Injectable({ scope: Scope.TRANSIENT })
export class BusHealthIndicator extends HealthIndicator {
  constructor(private readonly moduleRef: ModuleRef) {
    super()
  }

  getContextBus(): Bus | null {
    try {
      return this.moduleRef.get(Bus, { strict: false })
    } catch {
      return null
    }
  }

  async pingCheck(key: string): Promise<any> {
    let isHealthy = false
    const bus = this.getContextBus()

    if (!bus) {
      throw new HealthCheckError(
        `${key} is not available`,
        this.getStatus(key, isHealthy, {
          message: 'Bus provider not found in application context',
        })
      )
    }

    isHealthy = bus.internalState === 'started'

    if (isHealthy) {
      return this.getStatus(key, isHealthy)
    }

    throw new HealthCheckError(`${key} is not available`, this.getStatus(key, isHealthy))
  }
}
