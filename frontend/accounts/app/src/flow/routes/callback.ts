import { getRedirectUrl } from '../utils'

export const callback = (req, res) => {
  const state = req.query.state ? JSON.parse(Buffer.from(req.query.state, 'base64').toString()) : {}

  if (req.session.registrationProfile) {
    res.redirect('/signup/profile')
  } else if (req.session.registrationComplete) {
    res.redirect('/signup/complete')
  } else if (state.continue) {
    res.redirect(state.continue)
  } else {
    res.redirect(getRedirectUrl(req))
  }
}
