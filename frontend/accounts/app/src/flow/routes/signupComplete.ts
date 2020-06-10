export const signupComplete = (req, res, next) => {
  if (req.session.registrationComplete) {
    req.session.registrationComplete = null
  }

  next()
}
