import * as theme                                from './theme'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { createElement }                         from 'react'

export const ThemeProvider = (props) =>
  createElement(EmotionThemeProvider, {
    ...props,
    theme,
  })
