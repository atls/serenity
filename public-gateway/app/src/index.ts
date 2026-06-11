import { oathkeeperAuth }     from '@monstrs/oathkeeper-auth'

import { NestFactory }        from '@nestjs/core'

import { ActivityMiddleware } from './middleware/index.js'
import { ApplicationModule }  from './module.js'

declare const module: any

const getHeader = (req: any, name: string): string | null => {
  if (!req) {
    return null
  }

  if (typeof req.get === 'function') {
    const value = req.get(name)

    if (value) {
      return value
    }
  }

  const value = req.headers?.[name.toLowerCase()]

  if (Array.isArray(value)) {
    return value[0] || null
  }

  return value || null
}

const resolveUserFromKratos = async (req: any, _res: any, next: () => void) => {
  if (getHeader(req, 'x-user')) {
    next()
    return
  }

  const cookie = getHeader(req, 'cookie')

  if (!cookie) {
    next()
    return
  }

  const url = new URL(
    '/sessions/whoami',
    process.env.KRATOS_PUBLIC_URL || 'http://kratos:4433'
  ).toString()

  try {
    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
        cookie,
      },
    })

    if (!response.ok) {
      next()
      return
    }

    const payload: any = await response.json()
    const user = payload?.identity?.id

    if (user) {
      req.headers['x-user'] = user
    }
  } catch (error) {}

  next()
}

const bootstrap = async () => {
  const app = await NestFactory.create(ApplicationModule)

  if (process.env.NODE_ENV !== 'production') {
    app.use(
      oathkeeperAuth(
        process.env.OATHKEEPER_DECISIONS_URL || 'http://serenity-oathkeeper-api:4456/decisions',
        { host: 'serenity.aunited.dev' }
      )
    )
  }

  app.use(resolveUserFromKratos)

  app.use(app.get(ActivityMiddleware).use)

  await app.listen(process.env.PORT || 3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
