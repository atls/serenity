import { injectGlobal }    from 'emotion'

import { fontFaces }       from './theme'
import { injectFontFaces } from './utils'

export const injectGlobalStyles = () => {
  injectFontFaces(fontFaces)

  injectGlobal({
    html: {},
    body: {
      WebkitFontSmoothing: 'antialiased',
      WebkitOverflowScrolling: 'touch',
      height: '100%',
      margin: 0,
    },
  })
}
