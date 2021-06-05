import { AdminApi }      from '@ory/kratos-client'
import { Configuration } from '@ory/kratos-client'
import { PublicApi }     from '@ory/kratos-client'

import connectRedis      from 'connect-redis'
import express           from 'express'
import session           from 'express-session'
import next              from 'next'
import path              from 'path'

import flow              from './flow'

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
        domain: process.env.SESSION_COOKIE_DOMAIN || '.serenity.local.atls.tech',
      },
      store: new RedisStore({
        host: process.env.REDIS_HOST || 'redis',
      }),
    })
  )

  server.use((req, res, nextMid) => {
    // eslint-disable-next-line dot-notation
    req['kratos'] = {
      adminApi: new AdminApi(
        new Configuration({ basePath: process.env.KRATOS_ADMIN_URL || 'http://kratos:4434/' })
      ),
      publicApi: new PublicApi(
        new Configuration({
          basePath: process.env.KRATOS_PUBLIC_URL || 'https://kratos.serenity.local.atls.tech/',
        })
      ),
    }

    nextMid()
  })

  server.use(flow())

  server.get('*', (req, res) => handle(req, res))

  server.listen(process.env.PORT || 3000)
}

bootstrap()
