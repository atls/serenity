import { Injectable }                                          from '@nestjs/common'
import { Transporter as NodemailerTransport, createTransport } from 'nodemailer'

@Injectable()
export class Transport {
  private transport: NodemailerTransport

  constructor(private readonly sender: string, private readonly options: any) {
    this.transport = createTransport(options)
  }

  send(to, subject, html, text) {
    return this.transport.sendMail({
      to,
      subject,
      from: this.sender,
      text: text || '<empty>',
      html,
    })
  }
}
