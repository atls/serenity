import App                                   from 'next/app'
import compose                               from 'recompose/compose'
import { withApollo }                        from '@atlantis-lab/next-app-with-apollo'
import { withAuth }                          from '@atlantis-lab/next-app-with-auth'
import { withEmotion }                       from '@atlantis-lab/next-app-with-emotion'
import { withHelmet }                        from '@atlantis-lab/next-app-with-helmet'
import { withIntl }                          from '@atlantis-lab/next-app-with-intl'
import { withProvider }                      from '@atlantis-lab/next-app-with-provider'
import { withUser }                          from '@atlantis-lab/next-app-with-user'

import { ChatProvider }                      from '@ui/chat'
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import { ThemeProvider, injectGlobalStyles } from '@ui/theme'

export const withProviders = compose(
  withApollo({
    uri: (process as any).browser
      ? window.__NEXT_DATA__.props.apolloUrl
      : process.env.PUBLIC_GATEWAY_URL || 'https://public-gateway.local.serenity.atls.tech',
    fetch: (uri, options, props) => {
      if (props.token) {
        options.headers.authorization = props.token
      }

      if (typeof window !== 'undefined' && window.__NEXT_DATA__.props.token) {
        options.headers.authorization = window.__NEXT_DATA__.props.token
      }

      return fetch(uri, options)
    },
  }),
  withAuth(),
  withUser(),
  withIntl({
    default: 'ru',
  }),
  withEmotion({
    Provider: ThemeProvider,
    injectGlobalStyles,
  }),
  withHelmet(),
  withProvider(ChatProvider)
)

export default withProviders(App)

try {
  if (!(Intl as any).RelativeTimeFormat) {
    require('@formatjs/intl-relativetimeformat/polyfill')
    require('@formatjs/intl-relativetimeformat/dist/locale-data/ru')
  }
} catch (error) {
  // eslint-disable-next-line
  console.log(error)
}
