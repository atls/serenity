import * as Hydra   from '@oryd/hydra-client'
import connectRedis from 'connect-redis'
import express      from 'express'
import session      from 'express-session'
import next         from 'next'
import path from 'path'

import * as actions from './services'
import flow         from './flow'

const RedisStore = connectRedis(session)

const bootstrap = async () => {
  const app = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: process.env.NODE_ENV !== 'production' ? path.join(__dirname, '../src') : __dirname,
  })

  const handle = app.getRequestHandler()

  await app.prepare()

  const server = express()

  server.use(
    session({
      resave: false,
      secret: process.env.SESSION_SECRET || 'session-secret',
      saveUninitialized: true,
      cookie: {
        domain: process.env.SESSION_COOKIE_DOMAIN || '.serenity.local.aunited.dev',
      },
      store: new RedisStore({
        host: process.env.REDIS_HOST || 'redis',
      }),
    })
  )

  server.use((req, res, nextMid) => {
    // eslint-disable-next-line dot-notation
    req['hydra'] = new Hydra.AdminApi(process.env.HYDRA_ADMIN_URL || 'http://hydra:4445')

    nextMid()
  })

  server.use(flow(actions))

  server.get('*', (req, res) => handle(req, res))

  server.listen(process.env.PORT || 3000)
}

bootstrap()
