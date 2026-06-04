import { Component }     from 'react'
import React             from 'react'

import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@ui/theme'
import createCache       from '@emotion/cache'

const cache = createCache({
  key: 'emotion',
})

export const withEmotion = ({ Provider = ThemeProvider, injectGlobalStyles }: any) =>
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
