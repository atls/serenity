/* eslint-disable @typescript-eslint/no-unused-vars */

import { PublicApi } from '@ory/kratos-client'

import { isType }    from '../utils'

export const error = async (req, res, next) => {
  const { kratos } = req
  const { error: queryError } = req.query

  if (!queryError || !isType<string>(queryError)) {
    res.redirect(process.env.BASE_URL)
    return
  }

  kratos
    .getSelfServiceError(queryError)
    .then(({ status, data: body }) => {
      res.json(body)
    })
    .catch((err) => {
      res.json(err)

      next(err)
    })
}
