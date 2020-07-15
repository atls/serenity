import { Controller }    from '@nestjs/common'
import { GrpcMethod }    from '@nestjs/microservices'

import { MailerService } from '../services'

@Controller()
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @GrpcMethod('MailerService', 'getSending')
  async getSending({ id }) {
    const sending = await this.mailerService.findSending(id)

    return {
      ...sending,
      payload: JSON.stringify(sending.payload || {}),
    }
  }
}
