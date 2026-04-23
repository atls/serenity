import LoginPage                 from '@identity/login-page'
import { GetServerSideProps }    from 'next'
import { IncomingHttpHeaders }   from 'http'

const getQueryValue = (value?: string | string[]) => {
  if (Array.isArray(value)) {
    return value[0]
  }

  return value
}

const getHeaderValue = (headers: IncomingHttpHeaders, name: string) => {
  const value = headers[name]

  if (Array.isArray(value)) {
    return value[0]
  }

  return value
}

const resolveDefaultReturnTo = (headers: IncomingHttpHeaders) => {
  const host = getHeaderValue(headers, 'x-forwarded-host') || getHeaderValue(headers, 'host') || 'localhost:3002'
  const protocol = getHeaderValue(headers, 'x-forwarded-proto') || 'http'
  const hostname = host.split(':')[0]

  if (hostname === 'localhost' || hostname.endsWith('.localhost')) {
    return 'http://localhost:3000/'
  }

  if (hostname === '127.0.0.1') {
    return 'http://127.0.0.1:3000/'
  }

  if (hostname.startsWith('accounts.')) {
    return `${protocol}://${host.replace(/^accounts\./, '')}/`
  }

  return `${protocol}://${host}/`
}

const resolveDestination = (
  query: Record<string, string | string[]>,
  headers: IncomingHttpHeaders
) => {
  const returnToValue = getQueryValue(query.return_to)
  const continueValue = getQueryValue(query.continue)
  const destination = returnToValue || continueValue || resolveDefaultReturnTo(headers)

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

  return resolveDefaultReturnTo(headers)
}

const hasSession = async (cookie: string) => {
  const whoamiUrl = new URL(
    '/sessions/whoami',
    process.env.KRATOS_PUBLIC_URL || 'http://kratos:4433'
  ).toString()

  try {
    const response = await fetch(whoamiUrl, {
      headers: {
        accept: 'application/json',
        cookie,
      },
    })

    return response.ok
  } catch (error) {
    return false
  }
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const refresh = getQueryValue((query as Record<string, string | string[]>).refresh)

  if (refresh === 'true') {
    return { props: {} }
  }

  const cookie = req.headers.cookie

  if (!cookie) {
    return { props: {} }
  }

  if (!(await hasSession(cookie))) {
    return { props: {} }
  }

  return {
    redirect: {
      destination: resolveDestination(query as Record<string, string | string[]>, req.headers),
      permanent: false,
    },
  }
}

export default LoginPage
