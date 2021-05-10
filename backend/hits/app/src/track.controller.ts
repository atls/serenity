import { Controller, Get, Header, Req } from '@nestjs/common'
import { Request }                      from 'express'

import { TrackService }                 from '@hits/commands'

@Controller()
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get('/track/:id.js')
  @Header('Content-Type', 'application/javascript')
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  @Header('Pragma', 'none')
  @Header('Expires', '0')
  async trackJs(@Req() request: Request) {
    if (request.query.resource) {
      // @ts-ignore
      await this.trackService.view(request.cookies['connect.sid'], request.query.resource)
    }

    return `'${Date.now()}'`
  }

  @Get('/track')
  async track(@Req() request: Request) {
    if (request.query.resource) {
      // @ts-ignore
      await this.trackService.view(request.cookies['connect.sid'], request.query.resource)
    }

    return `'${Date.now()}'`
  }
}
