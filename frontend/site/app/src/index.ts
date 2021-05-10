import express            from 'express'
import next               from 'next'
import { oathkeeperAuth } from '@monstrs/oathkeeper-auth'

const bootstrap = async () => {
  const app = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: __dirname,
  })

  const handle = app.getRequestHandler()

  await app.prepare()

  const server = express()

  if (process.env.NODE_ENV !== 'production') {
    server.use(
      oathkeeperAuth(
        process.env.OATHKEEPER_DECISIONS_URL || 'http://serenity-oathkeeper-api:4456/decisions',
        { host: 'serenity.atls.tech' },
      ),
    )
  }

  server.get('*', (req, res) => handle(req, res))

  server.listen(process.env.PORT || 3000)
}

bootstrap()
