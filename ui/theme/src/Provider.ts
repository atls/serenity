import { createElement }                         from 'react'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import * as theme                                from './theme/index.js'

export const ThemeProvider = (props) =>
  createElement(EmotionThemeProvider, {
    ...props,
    theme,
  })
