import connectRedis from 'connect-redis'
import express      from 'express'
import session      from 'express-session'

import { passport } from './passport'

const RedisStore = connectRedis(session)

const bootstrap = async () => {
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
    }),
  )

  server.use(passport.initialize())
  server.use(passport.session())

  server.get('*', (req, res) => {
    if (!req.user) {
      res.json({
        subject: null,
        extra: {},
      })
    } else {
      const { profile }: any = req.user

      res.json({
        subject: profile.sub || profile.subject,
        extra: {},
      })
    }
  })

  server.listen(3000)
}

bootstrap()
