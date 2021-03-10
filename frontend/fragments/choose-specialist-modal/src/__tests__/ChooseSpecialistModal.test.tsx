import React                 from 'react'
import { IntlProvider }      from 'react-intl'
import { render }            from '@testing-library/react'

import { ThemeProvider }     from '@ui/theme'

import ChooseSpecialistModal from '..'

describe('Choose specialist modal fragment', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(
        <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
          <ThemeProvider>
            <ChooseSpecialistModal />
          </ThemeProvider>
        </IntlProvider>
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
