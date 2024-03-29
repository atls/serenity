/**
 * @jest-environment jsdom
 */

import { MockedProvider } from '@apollo/react-testing'
import { render }         from '@testing-library/react'

import React              from 'react'
import { IntlProvider }   from 'react-intl'
import { useIntl }        from 'react-intl'

import { ThemeProvider }  from '@ui/theme'

import { Projects }       from '../Projects'

const TestComponent = () => {
  const intl = useIntl()

  return <Projects intl={intl} />
}

describe('Projects fragment', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(
        <MockedProvider mocks={[]} addTypename={false}>
          <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
            <ThemeProvider>
              <TestComponent />
            </ThemeProvider>
          </IntlProvider>
        </MockedProvider>
      )

      expect(asFragment()).toBeTruthy()
    })
  })
})
