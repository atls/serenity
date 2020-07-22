export const signin = identify => async (req, res) => {
  const { hydra } = req

  const result: any = await identify(req.body)

  if (result.errors) {
    res.json(result)
  } else {
    try {
      const challenge = req.query.login_challenge || req.session.login_challenge

      const acceptLoginRequest = await hydra.acceptLoginRequest(challenge, {
        subject: result.result.id,
        remember: true,
        rememberFor: 3600,
        context: result.result,
      })

      res.json(acceptLoginRequest)
    } catch (error) {
      console.log(error) // eslint-disable-line

      res.status(400)
    }
  }
}
