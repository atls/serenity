import { GetServerSideProps } from 'next'

const getQueryValue = (value?: string | string[]) => {
  if (Array.isArray(value)) {
    return value[0]
  }

  return value
}

const resolveDestination = (query: Record<string, string | string[]>) => {
  const continueValue = getQueryValue(query.continue)
  const returnToValue = getQueryValue(query.return_to)
  const destination = returnToValue || continueValue || '/'

  try {
    const parsed = new URL(destination)

    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.toString()
    }
  } catch (error) {
    if (destination.startsWith('/')) {
      return destination
    }
  }

  return '/'
}

const resolveLogoutUrl = async (kratosBaseUrl: string, cookie: string) => {
  const flowResponse = await fetch(new URL('/self-service/logout/browser', kratosBaseUrl).toString(), {
    headers: {
      accept: 'application/json',
      cookie,
    },
  })

  if (!flowResponse.ok) {
    return null
  }

  const flow: any = await flowResponse.json()

  const logoutUrl = flow?.logout_url

  if (!logoutUrl) {
    return null
  }

  try {
    const resolved = new URL(logoutUrl)
    const internal = new URL(kratosBaseUrl)

    resolved.protocol = internal.protocol
    resolved.host = internal.host

    return resolved.toString()
  } catch (error) {
    return null
  }
}

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  const destination = resolveDestination(query as Record<string, string | string[]>)
  const cookie = req.headers.cookie

  if (cookie) {
    const kratosBaseUrl = process.env.KRATOS_PUBLIC_URL || 'http://kratos:4433'

    try {
      const logoutUrl = await resolveLogoutUrl(kratosBaseUrl, cookie)

      if (logoutUrl) {
        await fetch(logoutUrl, {
          headers: {
            cookie,
          },
        })
      }
    } catch (error) {}
  }

  return {
    redirect: {
      destination,
      permanent: false,
    },
  }
}

export default () => null
