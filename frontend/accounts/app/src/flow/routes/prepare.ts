import * as Hydra   from '@oryd/hydra-client'

import { getState } from '../utils'

export const prepare = (passport) => async (req, res, next) => {
  const { hydra }: { hydra: Hydra.AdminApi } = req
  if (!(req.query.login_challenge || req.session.login_challenge)) {
    passport.authenticate('oauth2', { state: getState(req) })(req, res, next)

    return
  }

  if (req.query.login_challenge) {
    req.session.login_challenge = req.query.login_challenge

    next()

    return
  }

  try {
    const {
      body: { skip, subject },
    } = await hydra.getLoginRequest(req.session.login_challenge)

    if (skip) {
      const acceptLoginRequest = await hydra.acceptLoginRequest(req.session.login_challenge, {
        subject,
      })

      res.redirect(acceptLoginRequest.body.redirectTo)
    } else {
      next()
    }
  } catch (error) {
    req.session.login_challenge = null

    passport.authenticate('oauth2', { state: getState(req) })(req, res, next)
  }
}
