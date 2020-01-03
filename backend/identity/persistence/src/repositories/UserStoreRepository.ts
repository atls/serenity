import { Bus }                from '@monstrs/nestjs-bus'
import { Logger }             from '@monstrs/nestjs-logger'
import { Injectable }         from '@nestjs/common'
import { WriteRepository }    from '@node-ts/ddd'
import { Connection }         from 'typeorm'

import { User as UserEntity } from '@identity/domain'

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

  async getByPhoneNumber(phone: string): Promise<any> {
    const writeModel = await this.repository.findOne({
      where: {
        phone: {
          number: phone,
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
