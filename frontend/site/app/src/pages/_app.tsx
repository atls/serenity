import React, { Component }                  from 'react'
import App                                   from 'next/app'
import compose                               from 'recompose/compose'
import { CacheProvider }                     from '@emotion/react'
import createCache                           from '@emotion/cache'
import { withApollo }                        from '@atls/next-app-with-apollo'
import { withHelmet }                        from '@atls/next-app-with-helmet'
import { withUser }                          from '@atls/next-app-with-user'
import { ChatProvider }                      from '@ui/chat'

/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import { ThemeProvider, injectGlobalStyles } from '@ui/theme'
import { withAuth }                          from '@atls/next-app-with-auth'
import { withIntl }                          from '@atls/next-app-with-intl'
import { withProvider }                      from '@atls/next-app-with-provider'

const cache = createCache({
  key: 'emotion-cache'
})

export const withEmotion =
  ({ Provider = ThemeProvider, injectGlobalStyles }: any) =>
    (WrapperComponent) =>
      class WithEmotion extends Component<any> {
        constructor(props, context) {
          super(props, context)

          if (injectGlobalStyles) {
            injectGlobalStyles()
          }
        }

        render() {
          return (
            <CacheProvider value={cache}>
              <Provider>
                <WrapperComponent {...this.props} />
              </Provider>
            </CacheProvider>
          )
        }
      }


export const withProviders = compose(
  withApollo({
    uri: (process as any).browser
      ? window.__NEXT_DATA__.props.apolloUrl
      : process.env.PUBLIC_GATEWAY_URL || 'https://public-gateway.local.serenity.atls.tech',
    // @ts-ignore
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
