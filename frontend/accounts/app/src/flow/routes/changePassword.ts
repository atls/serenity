import originalUrl from 'original-url'
import { hydra }   from '@monstrs/hydra-client'
import { format }  from 'url'

export const changePassword = action => async (req, res) => {
  const result: any = await action({ ...req.body, token: req.params.token })

  if (result.errors) {
    res.json(result)
  } else {
    try {
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
