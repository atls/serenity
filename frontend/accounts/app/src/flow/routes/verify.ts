export const verify = (action, callback) => async (req, res, next) => {
  const result: any = await action({ token: req.params.token })

  if (result.errors) {
    res.status(404)
  } else {
    callback(req, res, next)
  }
}
