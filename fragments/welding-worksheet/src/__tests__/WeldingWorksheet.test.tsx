/**
 * @jest-environment jsdom
 */

import { render }           from '@testing-library/react'

import React                from 'react'
import { IntlProvider }     from 'react-intl'
import { useIntl }          from 'react-intl'

import { ThemeProvider }    from '@ui/theme'

import { WeldingWorksheet } from '../WeldingWorksheet'

const TestComponent = () => {
  const intl = useIntl()

  return <WeldingWorksheet intl={intl} />
}

describe('Welding worksheet', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(
        <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
          <ThemeProvider>
            <TestComponent />
          </ThemeProvider>
        </IntlProvider>
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
