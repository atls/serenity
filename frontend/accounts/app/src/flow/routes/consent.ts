export const consent = async (req, res) => {
  const { consent_challenge: consentChallenge } = req.query
  const { hydra } = req

  hydra.getConsentRequest(consentChallenge).then(({ body }) => {
    if (body.skip) {
      return hydra
        .acceptConsentRequest(consentChallenge, {
          grantScope: body.requestedScope,
          grantAccessTokenAudience: body.requestedAccessTokenAudience,
          rememberFor: 3600,
          remember: true,
          session: {
            accessToken: { ...body.context },
          },
        })
        .then(({ body }) => {
          res.redirect(body.redirectTo)
        })
    }
  })
}
