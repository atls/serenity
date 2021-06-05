/* eslint-disable @typescript-eslint/no-unused-expressions */

import { PublicApi } from '@ory/kratos-client'

export const redirect = async (req, res, next) => {
  const { publicApi: kratos }: { publicApi: PublicApi } = req.kratos

  kratos
    .whoami(decodeURIComponent(req.header('Cookie')), req.header('Authorization'))
    .then(({ status, data }) => {
      next()
    })
    .catch((err) => {
      err.status === 404 ? res.json(err) : res.redirect('/login')
    })
}
