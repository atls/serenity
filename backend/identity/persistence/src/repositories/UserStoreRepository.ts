import { Bus }                from '@monstrs/nestjs-bus'
import { Logger }             from '@monstrs/nestjs-logger'
import { WriteRepository }    from '@node-ts/ddd'
import { Connection }         from 'typeorm'

import { User as UserEntity } from '@identity/domain'
import { Injectable }         from '@nestjs/common'

import { User }               from '../entities'

@Injectable()
// @ts-ignore
export class UserStoreRepository extends WriteRepository<UserEntity, User> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(UserEntity, User, connection, bus, logger)
  }

  async getByEmailAddress(email: string): Promise<any> {
    const writeModel = await this.repository.findOne({
      where: {
        email: {
          address: email,
        },
      },
    })

    if (!writeModel) {
      return null
    }

    return this.toAggregateRoot(writeModel)
  }

  async getByEmailVerificationToken(token: string): Promise<any> {
    const writeModel = await this.repository.findOne({
      where: {
        email: {
          verificationToken: token,
        },
      },
    })

    if (!writeModel) {
      return null
    }

    return this.toAggregateRoot(writeModel)
  }

  async getByResetPasswordToken(token: string): Promise<any> {
    const writeModel = await this.repository.findOne({
      where: {
        credentials: {
          resetToken: token,
        },
      },
    })

    if (!writeModel) {
      return null
    }

    return this.toAggregateRoot(writeModel)
  }
}
