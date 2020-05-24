import querystring        from 'querystring'
import { hydra }          from '@monstrs/hydra-client'
import { format, parse }  from 'url'

import { getRedirectUrl } from '../utils'

export const redirect = async (req, res) => {
  if (req.user) {
    res.redirect(getRedirectUrl(req))
  } else if (req.query.login_challenge) {
    let target = '/signin'

    const { request_url: requestUrl } = await hydra.getLoginRequest(req.query.login_challenge)

    if (requestUrl) {
      const { query } = parse(requestUrl)
      const { state } = querystring.parse(query)

      if (state) {
        const values = JSON.parse(Buffer.from(state as any, 'base64').toString())

        if (values.target) {
          target = values.target // eslint-disable-line prefer-destructuring
        }
      }
    }

    res.redirect(
      format({
        pathname: target,
        query: req.query,
      })
    )
  } else {
    res.redirect('/signin')
  }
}
