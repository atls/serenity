import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Sending }          from '@mailer/db'
import { Injectable }       from '@nestjs/common'

@Injectable()
export class MailerService {
  constructor(
    @InjectRepository(Sending)
    private readonly sendingRepository: Repository<Sending>
  ) {}

  findSending(id: string): Promise<Sending> {
    return this.sendingRepository.findOne(id)
  }
}
