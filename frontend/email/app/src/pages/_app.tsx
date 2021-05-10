import App                                   from 'next/app'
import compose                               from 'recompose/compose'

import { ThemeProvider, injectGlobalStyles } from '@ui/theme'
import { withEmotion }                       from '@atlantis-lab/next-app-with-emotion'
import { withIntl }                          from '@atlantis-lab/next-app-with-intl'

export const withProviders = compose(
  withIntl({
    default: 'ru',
  }),
  withEmotion({
    Provider: ThemeProvider,
    injectGlobalStyles,
  }),
)

export default withProviders(App)
