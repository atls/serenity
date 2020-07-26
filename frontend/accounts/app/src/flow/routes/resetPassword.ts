export const resetPassword = action => async (req, res) => {
  res.json(await action(req.body))
}
