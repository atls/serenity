import originalUrl from 'original-url'
import { format }  from 'url'

export const getRedirectUrl = req => {
  if (process.env.DEFAULT_REDIRECT_URL) {
    return process.env.DEFAULT_REDIRECT_URL
  }

  const url = originalUrl(req)

  if (url) {
    return format({
      ...url,
      pathname: '/',
      hostname: url.hostname.replace('accounts', 'cabinet'),
    })
  }

  return null
}

export const getState = req => {
  const state: any = { target: req._parsedUrl.pathname } // eslint-disable-line no-underscore-dangle

  if (req.query.continue) {
    state.continue = req.query.continue
  }

  return Buffer.from(JSON.stringify(state)).toString('base64')
}
