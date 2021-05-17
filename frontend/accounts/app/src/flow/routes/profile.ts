export const profile = (createProfile) => async (req, res) => {
  const result: any = await createProfile({
    ...req.body,
    id: req.user.profile.sub,
    email: req.session.email,
  })

  if (result.errors) {
    res.json(result)
  } else {
    req.session.email = null
    req.session.registrationProfile = null
    req.session.registrationComplete = true

    res.json({
      redirect_to: '/signup/complete',
    })
  }
}
