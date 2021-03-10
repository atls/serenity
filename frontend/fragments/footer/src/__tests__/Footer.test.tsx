import React             from 'react'
import { IntlProvider }  from 'react-intl'
import { render }        from '@testing-library/react'

import { ThemeProvider } from '@ui/theme'

import Footer            from '..'

describe('Footer fragment', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(
        <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
          <ThemeProvider>
            <Footer />
          </ThemeProvider>
        </IntlProvider>
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
