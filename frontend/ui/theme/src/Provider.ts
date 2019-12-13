import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { createElement }                         from 'react'

import * as theme                                from './theme'

export const ThemeProvider = props =>
  createElement(EmotionThemeProvider, {
    ...props,
    theme,
  })
