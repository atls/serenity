import originalUrl from 'original-url'
import { hydra }   from '@oryd/hydra-client'
import { format }  from 'url'

export const signup = register => async (req, res) => {
  const result: any = await register(req.body)

  if (result.errors) {
    res.json(result)
  } else {
    try {
      req.session.registrationProfile = true
      req.session.email = result.result.email

      const challenge = req.query.login_challenge || req.session.login_challenge

      const acceptLoginRequest = await hydra.acceptLoginRequest(challenge, {
        subject: result.result.id,
        remember: true,
        remember_for: 3600,
        context: result.result,
      })

      res.json(acceptLoginRequest)
    } catch (error) {
      console.log(error) // eslint-disable-line

      const url = originalUrl(req)

      res.json({
        redirect_to: format({
          ...url,
          path: '/signin',
        }),
      })
    }
  }
}
