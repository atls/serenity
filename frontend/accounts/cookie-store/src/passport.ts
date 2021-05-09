import OAuth2Strategy from 'passport-oauth2'
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
import passport       from 'passport'
import refresh        from 'passport-oauth2-refresh'

const strategy = new OAuth2Strategy(
  {
    authorizationURL: process.env.OAUTH_AUTHORIZATION_URL,
    callbackURL: process.env.OAUTH_CALLBACK_URL,
    tokenURL: process.env.OAUTH_TOKEN_URL,
    clientID: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    state: false, // TODO: implement state
    scope: ['openid', 'offline'],
  },
  (accessToken, refreshToken, params, profile, cb) => {
    cb(null, { accessToken, profile })
  },
)

strategy.userProfile = function(accessToken, done) {
  this._oauth2._request(
    'GET',
    process.env.OAUTH_USERINFO_URL,
    null,
    null,
    accessToken,
    (error, data) => {
      if (error) {
        done(error)
      } else {
        try {
          done(null, JSON.parse(data))
        } catch (e) {
          done(e)
        }
      }
    },
  )
}

passport.use('oauth2', strategy)

passport.use('refresh', refresh)

passport.serializeUser((user: any, done) => {
  done(null, JSON.stringify(user))
})

passport.deserializeUser((user: any, done) => {
  done(null, JSON.parse(user))
})

export { passport }
