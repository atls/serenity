import * as Hydra from '@oryd/hydra-client'

export const consent = async (req, res) => {
  const { hydra }: { hydra: Hydra.AdminApi } = req
  const { consent_challenge: consentChallenge } = req.query

  const response = await hydra.getConsentRequest(consentChallenge)

  const acceptResponse = await hydra.acceptConsentRequest(consentChallenge, {
    grantAccessTokenAudience: response.body.requestedAccessTokenAudience,
    grantScope: response.body.requestedScope,
    rememberFor: 3600,
    remember: true,
    session: {
      accessToken: response.body.context || {},
    },
  })

  res.redirect(acceptResponse.body.redirectTo)
}
