import { hydra } from '@monstrs/hydra-client'

export const consent = async (req, res) => {
  const { consent_challenge: consentChallenge } = req.query

  const response = await hydra.getConsentRequest(consentChallenge)

  const acceptResponse = await hydra.acceptConsentRequest(consentChallenge, {
    grant_access_token_audience: response.requested_access_token_audience,
    grant_scope: response.requested_scope,
    remember_for: 3600,
    remember: true,
    session: {
      access_token: response.context || {},
    },
  })

  res.redirect(acceptResponse.redirect_to)
}
