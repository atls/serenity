import React, { Component }                  from 'react'
import App                                   from 'next/app'
import compose                               from 'recompose/compose'
import { CacheProvider }                     from '@emotion/react'
import { createCache }                       from '@emotion/cache'

import { ThemeProvider, injectGlobalStyles } from '@ui/theme'
import { withIntl }                          from '@atls/next-app-with-intl'

// TODO replace with new withEmotion from @atls

const cache = createCache({
  key: 'emotion',
})

export const withEmotion =
  // eslint-disable-next-line
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
  withIntl({
    default: 'ru',
  }),
  withEmotion({
    Provider: ThemeProvider,
    injectGlobalStyles,
  })
)

export default withProviders(App)
