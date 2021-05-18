import originalUrl from 'original-url'
import { format }  from 'url'

export const signoutComplete = (req, res) => {
  req.logout()
  res.clearCookie('login_challenge')

  if (req.query.continue) {
    res.redirect(req.query.continue)
  } else {
    const url = originalUrl(req)

    if (url) {
      res.redirect(
        format({
          ...url,
          pathname: '/',
          hostname: url.hostname.replace('accounts.', ''),
        }),
      )
    }
  }
}
