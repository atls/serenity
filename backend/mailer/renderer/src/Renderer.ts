import { Injectable } from '@nestjs/common'

import htmlToText     from 'html-to-text'
import fetch          from 'isomorphic-fetch'
import qs             from 'qs'
import { format }     from 'url'
import { parse }      from 'url'

interface RenderResult {
  html: string
  text: string
  subject: string
}

@Injectable()
export class Renderer {
  constructor(private url: string) {}

  async render(template: string, payload = {}): Promise<RenderResult> {
    const templateUrl = format({
      ...parse(this.url),
      pathname: `/_render/${template}`,
      search: qs.stringify(payload),
    })

    const response = await fetch(templateUrl)

    const html = await response.text()

    const titleRegex = /<title>(.*?)<\/title>/gi

    let subject = ''

    if (titleRegex.test(html)) {
      const [title] = html.match(titleRegex)
      subject = title.replace('<title>', '').replace('</title>', '')
    }

    const text = htmlToText.fromString(html)

    return {
      subject,
      html,
      text,
    }
  }
}
