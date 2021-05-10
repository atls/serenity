import * as Hydra from '@oryd/hydra-client'

export const signout = async (req, res) => {
  const { hydra }: { hydra: Hydra.AdminApi } = req
  if (!req.query.logout_challenge) {
    res.redirect(
      process.env.OAUTH_AUTHORIZATION_URL.replace('/oauth2/auth', '/oauth2/sessions/logout'),
    )
  } else {
    const response = await hydra.acceptLogoutRequest(req.query.logout_challenge)
    res.redirect(response.body.redirectTo)
  }
}
