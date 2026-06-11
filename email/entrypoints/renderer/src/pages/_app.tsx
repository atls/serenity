import App                    from 'next/app'
import compose                from 'recompose/compose'

import { ThemeProvider }      from '@ui/theme'
import { injectGlobalStyles } from '@ui/theme'

import { withEmotion }        from '../providers/index.js'
import { withIntl }           from '../providers/index.js'

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
