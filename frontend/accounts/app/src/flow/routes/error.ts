import { AdminApi } from '@ory/kratos-client'

import { isType }   from '../utils'

export const error = async (req, res, next) => {
  const { adminApi: kratos }: { adminApi: AdminApi } = req.kratos
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
