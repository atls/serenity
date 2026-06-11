import { injectGlobal }    from '@emotion/css'

import { fontFaces }       from './theme/index.js'
import { injectFontFaces } from './utils.js'

export const injectGlobalStyles = () => {
  injectFontFaces(fontFaces as any)

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
