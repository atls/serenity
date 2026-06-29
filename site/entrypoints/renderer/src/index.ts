import type { OathkeeperHeaders }       from '@atls/nestjs-oathkeeper'
import type { OathkeeperModuleOptions } from '@atls/nestjs-oathkeeper'
import type { Request }                 from 'express'
import type { Response }                from 'express'

import { OathkeeperDecisionService }    from '@atls/nestjs-oathkeeper'
import express                          from 'express'
import next                             from 'next'
import path                             from 'path'

const oathkeeperApiUrl =
  process.env.OATHKEEPER_API_URL ||
  process.env.OATHKEEPER_DECISIONS_URL?.replace(/\/decisions\/?$/, '') ||
  'http://serenity-oathkeeper-api:4456'

const createOathkeeperDecisionClient = (apiUrl: string) => ({
  async decide(headers: OathkeeperHeaders) {
    const response = await fetch(new URL('/decisions', apiUrl).toString(), {
      headers,
      method: 'GET',
    })

    return {
      headers: response.headers,
      status: response.status,
    }
  },
})

const createOathkeeperAuth = (forwardedHost: string) => {
  const options: OathkeeperModuleOptions = {
    decision: {
      forwardedHost,
    },
    middleware: {
      mode: 'enrich',
    },
    urls: {
      api: oathkeeperApiUrl,
    },
  }

  const decisions = new OathkeeperDecisionService(
    createOathkeeperDecisionClient(oathkeeperApiUrl),
    options
  )

  return async (req: Request, _res: Response, next: () => void) => {
    try {
      const decision = await decisions.decide({
        headers: req.headers,
        host: forwardedHost,
        method: req.method || 'GET',
        proto: req.protocol,
        uri: req.url || '/',
      })

      if (decision.allowed) {
        if (decision.authorization) {
          req.headers.authorization = decision.authorization
        }

        if (decision.user) {
          req.headers['x-user'] = decision.user
        }
      }
    } catch (error) {}

    next()
  }
}

const bootstrap = async () => {
  const app = next({
    dev: process.env.NODE_ENV !== 'production',
    dir:
      process.env.NODE_ENV !== 'production' ? path.join(__dirname, '../src/index.js') : __dirname,
  })

  const handle = app.getRequestHandler()

  await app.prepare()

  const server = express()

  if (process.env.NODE_ENV !== 'production') {
    server.use(createOathkeeperAuth('serenity.atls.tech'))
  }

  server.get('*', (req, res) => handle(req, res))

  server.listen(process.env.PORT || 3000)
}

bootstrap()
