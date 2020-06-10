import bodyParser   from 'body-parser'
import cookieParser from 'cookie-parser'
import { Router }   from 'express'

import { passport } from './passport'
import {
  callback,
  changePassword,
  consent,
  prepare,
  profile,
  redirect,
  resetPassword,
  signin,
  signout,
  signoutComplete,
  signup,
  signupComplete,
  verify,
} from './routes'

export default actions => {
  const router = Router()

  router.use(passport.initialize())
  router.use(passport.session())

  router.use(cookieParser())

  router.get('/', redirect)
  router.get('/signin', prepare(passport))
  router.get('/signup', prepare(passport))
  router.get('/signout', signout)
  router.get('/signout/complete', signoutComplete)
  router.get('/callback', passport.authenticate('oauth2'), callback)
  router.get('/consent', consent)
  router.get('/signup/complete', signupComplete)
  router.get('/verify/:token', verify(actions.verifyEmail, prepare(passport)))
  router.get('/change-password/:token', prepare(passport))

  router.post('/signin', bodyParser.json(), signin(actions.identify))
  router.post('/signup', bodyParser.json(), signup(actions.register))

  router.post('/signup/profile', bodyParser.json(), profile(actions.createProfile))

  router.post('/reset-password', bodyParser.json(), resetPassword(actions.resetPassword))

  router.post('/change-password/:token', bodyParser.json(), changePassword(actions.changePassword))

  return router
}
