/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import { withApollo }         from '@atls/next-app-with-apollo'
import { withHelmet }         from '@atls/next-app-with-helmet'
import App                    from 'next/app'
import compose                from 'recompose/compose'

import { ChatProvider }       from '@ui/chat'
import { ThemeProvider }      from '@ui/theme'
import { withProvider }       from '@atls/next-app-with-provider'
import { injectGlobalStyles } from '@ui/theme'

import { withAuth }           from '../providers/index.js'
import { withEmotion }        from '../providers/index.js'
import { withUser }           from '../providers/index.js'
import { withIntl }           from '../providers/index.js'

const nextHeadModule: any = require('next/head')

if (typeof nextHeadModule.rewind !== 'function') {
  nextHeadModule.rewind = () => null
}

if (nextHeadModule.default && typeof nextHeadModule.default.rewind !== 'function') {
  nextHeadModule.default.rewind = () => null
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
