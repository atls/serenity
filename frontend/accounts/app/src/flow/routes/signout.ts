export const signout = async (req, res) => {
  const { hydra } = req

  if (!req.query.logout_challenge) {
    res.redirect(
      process.env.OAUTH_AUTHORIZATION_URL.replace('/oauth2/auth', '/oauth2/sessions/logout')
    )
  } else {
    const {
      body: { redirectTo },
    } = await hydra.acceptLogoutRequest(req.query.logout_challenge)
    res.redirect(redirectTo)
  }
}
