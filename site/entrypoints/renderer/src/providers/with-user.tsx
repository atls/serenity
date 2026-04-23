import { UserProvider } from '@atls/react-user'
import { Component }    from 'react'
/* eslint-disable no-underscore-dangle */
import React            from 'react'

declare global {
  interface Window {
    // @ts-ignore
    __NEXT_DATA__: any
  }
}

type Props = {
  user?: string
}

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

const resolveUserFromKratos = async (cookie: string): Promise<string | null> => {
  const urls = [
    new URL('/sessions/whoami', process.env.KRATOS_PUBLIC_URL || 'http://kratos:4433').toString(),
    'http://localhost:4433/sessions/whoami',
  ]

  for (const url of urls) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: 'application/json',
          cookie,
        },
      })

      if (!response.ok) {
        continue
      }

      const payload: any = await response.json()
      const user = payload?.identity?.id

      if (user) {
        return user
      }
    } catch (error) {}
  }

  return null
}

export const withUser = () => (WrapperComponent) =>
  class WithUser extends Component<Props> {
    static async getInitialProps(context) {
      let props = {}

      const {
        ctx: { req },
      } = context

      if (WrapperComponent.getInitialProps) {
        props = await WrapperComponent.getInitialProps(context)
      }

      let user = null

      if (req) {
        user = getHeader(req, 'x-user')

        if (!user) {
          const cookie = getHeader(req, 'cookie')

          if (cookie) {
            user = await resolveUserFromKratos(cookie)
          }
        }
      } else if ((process as any).browser) {
        user = window.__NEXT_DATA__.props.user
      }

      return {
        ...props,
        user,
      }
    }

    render() {
      const { user } = this.props

      return (
        <UserProvider value={user as any}>
          <WrapperComponent {...this.props} user={user} />
        </UserProvider>
      )
    }
  }
