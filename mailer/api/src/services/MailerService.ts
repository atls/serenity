import { Injectable }       from '@nestjs/common'
import { Repository }       from 'typeorm'

import { Sending }          from '@mailer/db'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class MailerService {
  constructor(
    @InjectRepository(Sending)
    private readonly sendingRepository: Repository<Sending>
  ) {}

  findSending(id: string): Promise<Sending> {
    // @ts-ignore
    return this.sendingRepository.findOne(id)
  }
}
